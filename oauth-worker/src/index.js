/**
 * GitHub OAuth handler for Decap CMS, running on Cloudflare Workers.
 *
 * Decap opens this worker in a popup to log Clara in with GitHub, without her
 * needing any developer tooling. Flow:
 *   /auth      -> redirect to GitHub's consent screen
 *   /callback  -> exchange the code for a token and hand it back to Decap
 *
 * Secrets (set with `wrangler secret put ...`):
 *   GITHUB_CLIENT_ID      - from the GitHub OAuth App
 *   GITHUB_CLIENT_SECRET  - from the GitHub OAuth App
 */

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";
const PROVIDER = "github";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    switch (url.pathname) {
      case "/auth":
        return handleAuth(url, env);
      case "/callback":
        return handleCallback(request, url, env);
      default:
        return new Response("Time 4U CMS OAuth worker is running.", {
          headers: { "content-type": "text/plain" },
        });
    }
  },
};

function handleAuth(url, env) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response("Missing GITHUB_CLIENT_ID secret.", { status: 500 });
  }

  // Random state guards against CSRF; we stash it in a cookie and verify on callback.
  const state = crypto.randomUUID();
  const scope = url.searchParams.get("scope") || "repo";

  const authorize = new URL(GITHUB_AUTHORIZE_URL);
  authorize.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  authorize.searchParams.set("redirect_uri", `${url.origin}/callback`);
  authorize.searchParams.set("scope", scope);
  authorize.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.toString(),
      "Set-Cookie": `oauth_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=600`,
    },
  });
}

async function handleCallback(request, url, env) {
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");
  const savedState = readCookie(request, "oauth_state");

  if (!code) {
    return renderResult("error", "Missing authorization code.");
  }
  if (!savedState || savedState !== returnedState) {
    return renderResult("error", "Invalid OAuth state. Please try again.");
  }

  const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  });

  const data = await tokenResponse.json();

  if (data.error || !data.access_token) {
    return renderResult("error", data.error_description || "Token exchange failed.");
  }

  return renderResult("success", { token: data.access_token, provider: PROVIDER });
}

function readCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? match[1] : null;
}

/**
 * Returns the tiny HTML page Decap expects. It postMessages the result to the
 * CMS window that opened the popup, using Decap's handshake protocol.
 */
function renderResult(status, payload) {
  const content = JSON.stringify(payload);
  const message = `authorization:${PROVIDER}:${status}:${content}`;

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${PROVIDER}", "*");
      })();
    </script>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      // Clear the state cookie now that we're done with it.
      "Set-Cookie": "oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0",
    },
  });
}

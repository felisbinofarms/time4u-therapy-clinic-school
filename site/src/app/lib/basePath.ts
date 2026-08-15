// GitHub Pages serves under a subpath; Cloudflare serves at root. Prefix asset paths accordingly.
export const basePath =
  process.env.GITHUB_PAGES === "true" ? "/time4u-therapy-clinic-school" : "";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-shell">
          <div className="hero-copy">
            <span className="eyebrow">Licensed &middot; Professional &middot; Local</span>
            <h1>Therapeutic massage that treats you like a person, not a number.</h1>
            <p>
              Welcome to Time 4U Therapy Massage in Chickasha, Oklahoma. With
              Clara Schoonover, L.M.T., you get skilled, results-focused bodywork
              in a calm, comfortable setting — tailored to your body and your
              goals.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:4059330962">
                Call to Book
              </a>
              <a className="btn btn-outline" href="sms:4059330962">
                Text to Book
              </a>
              <Link className="btn btn-outline" href="/services">
                View Services
              </Link>
            </div>
          </div>
          <aside className="hero-aside">
            <h2>Visit Us</h2>
            <p>By appointment only — call or text to schedule.</p>
            <ul>
              <li>611 West Chickasha, Suite B, Chickasha, OK</li>
              <li>(405) 933-0962</li>
              <li>Mon&ndash;Thu, 9am&ndash;5pm</li>
              <li>Self-pay &middot; No insurance</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>Services</h2>
            <p>
              Therapeutic and relaxation bodywork, plus waxing and wellness
              services — each session tailored to you.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <h3>Therapeutic Massage</h3>
              <p>
                Deep tissue, medical, orthopedic, prenatal, lymphatic and more —
                focused on real relief from pain and tension.
              </p>
            </article>
            <article className="card">
              <h3>Reflexology &amp; Bodywork</h3>
              <p>
                Foot and hand reflexology, cupping, hot stone and myofascial
                techniques to help your body reset and recover.
              </p>
            </article>
            <article className="card">
              <h3>Waxing &amp; Wellness</h3>
              <p>
                Professional waxing and sugaring, ear candling, and detox
                services with clear prep and aftercare guidance.
              </p>
            </article>
          </div>
          <p className="section-cta">
            <Link className="btn btn-primary" href="/services">
              See all services
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Why clients choose Time 4U</h3>
            <p>
              You get a licensed therapist who listens first, then delivers the
              right techniques for your body — not a one-size-fits-all routine.
            </p>
            <div className="badge-row">
              <span className="badge">Licensed Therapist</span>
              <span className="badge">Personalized Care</span>
              <span className="badge">Professional &amp; Discreet</span>
              <span className="badge">Local &amp; Trusted</span>
            </div>
          </article>
          <article className="card">
            <h3>What to expect</h3>
            <ul className="steps">
              <li>A warm, quiet, comfortable treatment room</li>
              <li>Proper draping and respect for your comfort at all times</li>
              <li>Techniques matched to your condition and pain level</li>
              <li>Honest guidance on what will actually help</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>What clients are saying</h2>
            <p>Rated 4.8 out of 5 on Google. Here&apos;s what local clients share.</p>
          </div>
          <div className="cards">
            <article className="card">
              <blockquote className="quote">
                I was a first-time client and just happened to be close by and
                walked in with no appointment. They had no problem squeezing me
                in for a 30-minute foot massage, took their time, and really
                cared about my problem areas, explaining what they were doing as
                we went along. I left feeling like I was walking on clouds.
                Definitely will be back soon!
                <strong>Michael &middot; Google review</strong>
              </blockquote>
            </article>
            <article className="card">
              <blockquote className="quote">
                Tyson is an excellent masseuse. My deep tissue massage was
                amazing. Helped my osteoarthritis.
                <strong>Lonetta Avants &middot; Google review</strong>
              </blockquote>
            </article>
            <article className="card">
              <blockquote className="quote">
                Great work and amazing job and people. Peaceful atmosphere.
                <strong>Kathy Singleton &middot; Google review</strong>
              </blockquote>
            </article>
            <article className="card">
              <blockquote className="quote">
                Get in, get out. Great people.
                <strong>William Callahan &middot; Google review</strong>
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>New: School of Massage Therapy</h2>
              <p>
                Training and classes are on the way. Sign up for our newsletter
                to be the first to know when enrollment opens.
              </p>
            </div>
            <Link className="btn btn-primary" href="/school">
              Learn more
            </Link>
          </article>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Ready to book?</h3>
            <p>Call or text — appointments are scheduled 1&ndash;2 weeks ahead.</p>
            <ul className="steps">
              <li>Call or text: (405) 933-0962</li>
              <li>611 West Chickasha, Suite B, Chickasha, OK 73018</li>
              <li>Mon&ndash;Thu, 9am&ndash;5pm &middot; By appointment only</li>
            </ul>
            <p className="tiny">Moving to our new location September 25!</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:4059330962">
                Call Now
              </a>
              <a className="btn btn-outline" href="sms:4059330962">
                Text Now
              </a>
            </div>
          </article>
          <article className="card">
            <h3>Trusted, licensed care</h3>
            <p>
              Clara Schoonover, L.M.T. — serving Chickasha with professional,
              therapeutic massage and bodywork since 2008.
            </p>
            <div className="badge-row">
              <span className="badge">License #84488</span>
              <span className="badge">ABMP Member</span>
              <span className="badge">By Appointment</span>
            </div>
            <p className="section-cta">
              <Link className="btn btn-outline" href="/credentials">
                See credentials
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

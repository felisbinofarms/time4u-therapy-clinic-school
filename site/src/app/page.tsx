export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>By appointment only | Chickasha, Oklahoma</span>
          <span>Call or text: (405) 933-0962</span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-grid">
          <div className="brand" aria-label="Time 4 U Therapy Massage brand">
            <svg className="logo" viewBox="0 0 140 140" role="img" aria-label="Time 4U logo wave and clock mark">
              <path d="M18 95 C43 95, 47 75, 62 70 C79 64, 87 89, 120 89" fill="none" stroke="#133C6A" strokeWidth="6" strokeLinecap="round" />
              <path d="M44 95 C58 94, 67 84, 75 77 C86 68, 100 71, 98 82" fill="none" stroke="#133C6A" strokeWidth="5" strokeLinecap="round" />
              <path d="M42 76 A36 36 0 1 1 95 47" fill="none" stroke="#133C6A" strokeWidth="4" />
              <line x1="50" y1="40" x2="50" y2="33" stroke="#133C6A" strokeWidth="2" />
              <line x1="63" y1="30" x2="63" y2="23" stroke="#133C6A" strokeWidth="2" />
              <line x1="78" y1="28" x2="78" y2="21" stroke="#133C6A" strokeWidth="2" />
              <line x1="92" y1="34" x2="92" y2="27" stroke="#133C6A" strokeWidth="2" />
            </svg>
            <div className="brand-lines">
              <div className="brand-main">TIME 4 U THERAPY MASSAGE</div>
              <div className="brand-sub">Clinic and School of Massage Therapy</div>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#why">Why Choose Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="btn btn-outline" href="tel:4059330962">Call</a>
            <a className="btn btn-primary" href="#contact">Book Now</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-shell">
            <div className="hero-copy">
              <span className="eyebrow">Home Page POC</span>
              <h1>Therapeutic care that feels personal and professional.</h1>
              <p>
                Welcome to Time 4U Therapy Massage Clinic and School. This sample
                homepage shows the real look and feel we can launch: easy to use,
                clear on services and prices, and built to help more local clients
                confidently book with you.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:4059330962">Call to Book</a>
                <a className="btn btn-outline" href="#contact">Text to Book</a>
                <a className="btn btn-outline" href="#services">View Services</a>
              </div>
            </div>
            <aside className="hero-aside">
              <h2>At a Glance</h2>
              <p>Designed for Chickasha clients looking for trusted care.</p>
              <ul>
                <li>Simple service choices</li>
                <li>Clear booking options</li>
                <li>Visible credentials and trust cues</li>
                <li>Mobile-first layout for local search traffic</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="services" className="section-pad">
          <div className="wrap">
            <div className="section-head">
              <h2>Popular Services</h2>
              <p>
                Easy to scan, clear to compare, and written so clients understand
                value and outcomes.
              </p>
            </div>
            <div className="cards">
              <article className="card">
                <h3>Therapeutic Massage</h3>
                <p>
                  Focused sessions for stress relief, muscle tension, and recovery.
                </p>
                <div className="price">Example layout: 60 min | Starting at $85</div>
              </article>
              <article className="card">
                <h3>Waxing Services</h3>
                <p>
                  Professional care with prep and aftercare guidance clients can
                  follow confidently.
                </p>
                <div className="price">Example layout: Starting at $20</div>
              </article>
              <article className="card">
                <h3>Specialty Services</h3>
                <p>
                  Optional wellness services presented with clear expectations and
                  simple language.
                </p>
                <div className="price">Example layout: Priced by service</div>
              </article>
            </div>
            <p className="tiny">Pricing shown above is sample content for layout review only.</p>
          </div>
        </section>

        <section id="why" className="section-pad">
          <div className="wrap grid-2">
            <article className="card">
              <h3>Why clients will choose this site</h3>
              <p>
                In your market, many people compare price first. This homepage is
                designed to show both price clarity and trust so they feel good
                choosing your business, not just the cheapest option.
              </p>
              <div className="badge-row">
                <span className="badge">Clear Pricing</span>
                <span className="badge">Easy Booking</span>
                <span className="badge">Professional Credibility</span>
                <span className="badge">Referral Friendly</span>
              </div>
            </article>

            <article className="card">
              <h3>What this page will help you do</h3>
              <ul className="steps">
                <li>Get more calls and text messages from new clients</li>
                <li>Make it easy for current clients to refer friends</li>
                <li>Show quality and professionalism at first glance</li>
                <li>Build trust before clients even walk in</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="reviews" className="section-pad">
          <div className="wrap grid-2">
            <article className="card">
              <h3>Client feedback style section</h3>
              <p>
                This area can feature real client testimonials after approval and
                review.
              </p>
              <blockquote className="quote">
                I felt listened to, comfortable, and so much better after my
                session. Booking was easy and the care was excellent.
                <strong>Sample Review - Local Client</strong>
              </blockquote>
            </article>
            <article className="card" id="contact">
              <h3>Ready to book?</h3>
              <p>Call, text, or send a quick message.</p>
              <ul className="steps">
                <li>Call: (405) 933-0962</li>
                <li>Location: Chickasha, OK</li>
                <li>Hours: By appointment only</li>
              </ul>
              <div className="hero-cta">
                <a className="btn btn-primary" href="tel:4059330962">Call Now</a>
                <a className="btn btn-outline" href="#">Text Now</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="card">
            <h3>Time 4U Therapy Massage Clinic and School</h3>
            <p>
              Chickasha, Oklahoma | (405) 933-0962 | By appointment only
            </p>
            <p className="tiny">This page is a homepage POC for approval before full build.</p>
          </div>
          <div className="card">
            <h3>Stay in touch</h3>
            <p>Newsletter signup section (requested feature)</p>
            <form className="newsletter" action="#" method="post">
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button className="btn btn-primary" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>Time 4U Therapy Massage Clinic and School</h3>
          <p className="tiny">
            611 West Chickasha, Suite B &middot; Chickasha, OK 73018
            <br />
            (405) 933-0962 &middot; Mon&ndash;Thu, 9am&ndash;5pm &middot; By
            appointment only
          </p>
          <p className="tiny">Moving to our new location September 25!</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="card">
          <h3>Stay in touch</h3>
          <p className="tiny">
            Join our newsletter for wellness tips and news about our upcoming
            School of Massage Therapy.
          </p>
          <form className="newsletter" action="#" method="post">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
            />
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="wrap">
        <p className="tiny footer-legal">
          &copy; {year} Time 4U Therapy Massage Clinic and School &middot; Clara
          Schoonover, L.M.T. &middot; Licensed in Oklahoma
        </p>
      </div>
    </footer>
  );
}

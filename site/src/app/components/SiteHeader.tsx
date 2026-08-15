import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/credentials", label: "Credentials" },
  { href: "/faq", label: "FAQ" },
  { href: "/school", label: "School" },
];

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>By appointment only &middot; Chickasha, Oklahoma</span>
          <span>Call or text: (405) 933-0962</span>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-grid">
          <Link className="brand" href="/" aria-label="Time 4U Therapy Massage home">
            <Logo />
            <div className="brand-lines">
              <div className="brand-main">TIME 4 U THERAPY MASSAGE</div>
              <div className="brand-sub">Clinic and School of Massage Therapy</div>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-outline" href="tel:4059330962">
              Call
            </a>
            <Link className="btn btn-primary" href="/contact">
              Book Now
            </Link>
            <details className="mobile-menu">
              <summary aria-label="Toggle navigation menu">Menu</summary>
              <div className="mobile-menu-panel">
                <Link href="/">Home</Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact">Contact</Link>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

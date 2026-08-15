import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Book your massage at Time 4U Therapy Massage in Chickasha, OK. Call or text (405) 933-0962. 611 West Chickasha, Suite B. By appointment only, Mon–Thu 9am–5pm.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact &amp; Book</span>
          <h1>Let&apos;s get you on the schedule.</h1>
          <p>
            Call or text to book your appointment. Clara will help you choose the
            right service and find a time that works for you.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Book an appointment</h3>
            <ul className="steps">
              <li>
                Call or text: <a href="tel:4059330962">(405) 933-0962</a>
              </li>
              <li>611 West Chickasha, Suite B, Chickasha, OK 73018</li>
              <li>Hours: Mon&ndash;Thu, 9am&ndash;5pm</li>
              <li>By appointment only &middot; Self-pay (no insurance)</li>
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
            <h3>Good to know</h3>
            <ul className="steps">
              <li>Appointments are scheduled 1&ndash;2 weeks in advance.</li>
              <li>A credit card is kept on file to hold your appointment.</li>
              <li>Please give 24 hours&apos; notice to cancel.</li>
              <li>
                Arriving more than 15 minutes late may be treated as a no-show.
              </li>
            </ul>
            <p className="section-cta">
              <a className="btn btn-outline" href="/faq">
                Read full policies
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { business } from "../lib/business";

export const metadata: Metadata = {
  title: "FAQ & Policies",
  description:
    "Common questions about your massage session, what to expect, draping and comfort, plus booking, cancellation, and no-show policies at Time 4U Therapy Massage in Chickasha, OK.",
};

const faqs = [
  {
    q: "Where will my massage session take place?",
    a: "In a warm, comfortable, quiet room. Soft music may be played to help you relax, and you'll lie on a table designed for your comfort.",
  },
  {
    q: "Do I have to be completely undressed?",
    a: "You undress to your level of comfort. Most techniques are traditionally performed with the client unclothed, but it's entirely up to you — and you'll be properly draped the entire session.",
  },
  {
    q: "Will I be covered during the session?",
    a: "Yes. You'll be properly draped at all times to keep you warm and comfortable. Only the area being worked on is uncovered.",
  },
  {
    q: "What will the massage feel like?",
    a: "It depends on the work you need. Sessions often begin with broad, flowing strokes to relax muscle tension, then move to more focused pressure on specific areas. Always tell Clara if you'd like more or less pressure.",
  },
  {
    q: "How will I feel afterward?",
    a: "Most people feel deeply relaxed. Many experience relief from long-term aches and, after a short period of feeling slowed down, increased energy and a greater sense of well-being.",
  },
  {
    q: "Are there conditions where massage isn't advised?",
    a: "Yes. Before your session, Clara will ask general health questions. Please share any health problems or medications. If you're under a doctor's care, a written recommendation may be needed before your session.",
  },
  {
    q: "Do you accept insurance?",
    a: "No — Time 4U is self-pay only.",
  },
  {
    q: "How do I book?",
    a: `Call or text ${business.phone}. Appointments are by appointment only and are typically scheduled 1–2 weeks in advance.`,
  },
];

export default function FaqPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">FAQ &amp; Policies</span>
          <h1>Everything you need to feel comfortable before your visit.</h1>
          <p>
            New to massage or just have a few questions? Here&apos;s what to
            expect — and our booking policies.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>Booking &amp; cancellation policies</h2>
            <p>
              These policies help us serve every client fairly and keep
              appointments running smoothly.
            </p>
          </div>
          <div className="cards cards-2">
            <article className="card">
              <h3>Scheduling</h3>
              <p>
                By appointment only. Please schedule 1&ndash;2 weeks in advance. A
                credit card is kept on file to hold your appointment.
              </p>
            </article>
            <article className="card">
              <h3>Cancellations</h3>
              <p>
                We ask for 24 hours&apos; notice to cancel. Without 24 hours&apos;
                notice, the full appointment amount may be charged.
              </p>
            </article>
            <article className="card">
              <h3>No-shows &amp; late arrivals</h3>
              <p>
                Arriving more than 15 minutes late may be treated as a no-show. If
                you arrive late, your session may be shortened to respect the
                clients who follow you.
              </p>
            </article>
            <article className="card">
              <h3>Payment</h3>
              <p>
                Self-pay only — we do not accept insurance. Payment is due at the
                time of your appointment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>Still have a question?</h2>
              <p>Call or text and we&apos;ll be glad to help.</p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Contact us
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

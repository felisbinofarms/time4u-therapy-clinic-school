import type { Metadata } from "next";
import { phoneDigits } from "../lib/business";

export const metadata: Metadata = {
  title: "School of Massage Therapy",
  description:
    "Time 4U Therapy Massage Clinic and School — massage therapy training and classes coming soon in Chickasha, Oklahoma. Join our newsletter to be first to know when enrollment opens.",
};

export default function SchoolPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">School of Massage Therapy</span>
          <h1>Massage therapy training is coming to Chickasha.</h1>
          <p>
            Time 4U is growing into a clinic and a school. We&apos;re building a
            training program to help the next generation of therapists learn the
            craft the right way — with hands-on, professional instruction.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <article className="card">
            <h3>Coming Soon</h3>
            <p>
              Program details, class schedules, and enrollment information are on
              the way. Check back soon — or sign up for our newsletter below and
              we&apos;ll let you know the moment enrollment opens.
            </p>
            <div className="badge-row">
              <span className="badge">Hands-on Training</span>
              <span className="badge">Professional Instruction</span>
              <span className="badge">Local to Chickasha</span>
            </div>
          </article>
          <article className="card">
            <h3>Be first to know</h3>
            <p>
              Interested in becoming a massage therapist? Add your email to our
              newsletter using the sign-up in the footer, and you&apos;ll be
              among the first to hear about start dates and how to apply.
            </p>
            <p className="section-cta">
              <a className="btn btn-primary" href={`tel:${phoneDigits}`}>
                Call to ask a question
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

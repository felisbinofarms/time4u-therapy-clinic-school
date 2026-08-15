import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Therapeutic and relaxation massage, reflexology, cupping, hot stone, waxing and sugaring, ear candling and more in Chickasha, OK. By appointment with Clara Schoonover, L.M.T.",
};

const serviceGroups = [
  {
    title: "Massage Therapy",
    items: [
      "Full Body Massage",
      "Deep Tissue Massage",
      "Pregnancy / Prenatal Massage",
      "Lymphatic Massage",
      "Breast Massage (certified)",
      "Sinus Massage",
      "Half Body Massage",
    ],
  },
  {
    title: "Reflexology",
    items: ["Foot Reflexology", "Hand Reflexology", "Feet & Hand Reflexology"],
  },
  {
    title: "Waxing & Sugaring",
    items: [
      "Eyebrow, lip & full face",
      "Chin, jawline & neck",
      "Arms, underarms & hands",
      "Back & chest",
      "Bikini & Brazilian",
      "Toes & feet",
    ],
  },
  {
    title: "Additional Services",
    items: [
      "Ear Candling",
      "Detox",
      "Body Sculpting",
      "Add-ons: hot stone, cupping & essential oils",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Our Services</span>
          <h1>Care that&apos;s matched to your body and your goals.</h1>
          <p>
            Every session is personalized. Clara listens to your concerns first,
            then chooses the techniques that will give you real relief — whether
            that&apos;s deep therapeutic work, a relaxing full-body massage, or
            gentle, targeted care.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="cards cards-2">
            {serviceGroups.map((group) => (
              <article className="card service-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="service-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="card note-card">
            <h3>Pricing &amp; booking</h3>
            <p>
              Pricing depends on your session, condition, and the time needed, so
              we&apos;ll go over it when you book. Call or text{" "}
              <a href="tel:4059330962">(405) 933-0962</a> and Clara will help you
              choose the right service.
            </p>
            <p className="tiny">
              Please note: self-pay only. We do not accept insurance. Appointments
              are scheduled 1&ndash;2 weeks in advance.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:4059330962">
                Call to Book
              </a>
              <a className="btn btn-outline" href="sms:4059330962">
                Text to Book
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>Not sure what you need?</h2>
              <p>
                Tell Clara what&apos;s bothering you and she&apos;ll recommend the
                best approach for your body.
              </p>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Get in touch
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

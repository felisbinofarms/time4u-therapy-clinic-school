import type { Metadata } from "next";
import Link from "next/link";
import { basePath } from "../lib/basePath";

export const metadata: Metadata = {
  title: "About Clara",
  description:
    "Meet Clara Schoonover, L.M.T. — a licensed massage therapist and cosmetologist serving Chickasha, Oklahoma since 2008, specializing in medical, deep tissue, prenatal and therapeutic massage.",
};

const specialties = [
  "Medical Massage",
  "Deep Tissue & Sculpting",
  "Orthopedic Techniques (cervical pain)",
  "Therapeutic Reflexology",
  "Sciatica Relief",
  "Fibromyalgia Techniques",
  "Prenatal / Pregnancy Massage",
  "Carpal Tunnel Therapy",
  "Craniosacral Therapy",
  "Lymphatic Massage",
  "Cupping & Myofascial Release",
  "Breast Massage (certified)",
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1>Meet Clara Schoonover, L.M.T.</h1>
          <p>
            Skilled, caring, and dedicated to helping every client feel their
            best — inside and out.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap grid-2">
          <div className="prose">
            <div className="about-media">
              <img
                src={`${basePath}/images/massage-back.jpg`}
                alt="Clara providing a therapeutic massage"
              />
            </div>
            <p>
              Hello! My name is Clara Schoonover. Before I became a massage
              therapist, I earned my license in cosmetology. In 2008, I graduated
              from Platt College with my certification in Massage Therapy, and I
              couldn&apos;t be happier doing what I do.
            </p>
            <p>
              I specialize in medical massage, soft tissue mobilization,
              orthopedic techniques for cervical pain, therapeutic reflexology,
              massage for sciatica, deep tissue and sculpting, and safe, effective
              techniques for fibromyalgia and common problem areas. I&apos;ve also
              trained in prenatal massage, carpal tunnel therapy, craniosacral
              therapy, lymphatic massage, cupping, and myofascial release, and
              I&apos;m certified in breast massage.
            </p>
            <p>
              Along the way I&apos;ve added waxing, ear candling, and treatments
              using essential oils and aromatherapy. Ever since I was a teenager,
              I&apos;ve wanted to help the people around me feel confident and
              well. I&apos;m so grateful for the chance to help my clients feel
              their best, every visit.
            </p>
          </div>
          <aside className="card">
            <h3>At a glance</h3>
            <ul className="steps">
              <li>Licensed Massage Therapist (L.M.T.)</li>
              <li>License #84488 — Oklahoma</li>
              <li>Certified in Massage Therapy, Platt College (2008)</li>
              <li>Member, Associated Bodywork &amp; Massage Professionals</li>
              <li>Serving Chickasha since 2008</li>
            </ul>
            <p className="section-cta">
              <Link className="btn btn-outline" href="/credentials">
                View credentials
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <h2>Specialties &amp; techniques</h2>
            <p>Trained approaches Clara draws on to tailor every session.</p>
          </div>
          <div className="badge-row badge-row-wrap">
            {specialties.map((item) => (
              <span className="badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <article className="cta-band">
            <div>
              <h2>Ready to feel better?</h2>
              <p>Call or text to schedule your session with Clara.</p>
            </div>
            <a className="btn btn-primary" href="tel:4059330962">
              Call (405) 933-0962
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

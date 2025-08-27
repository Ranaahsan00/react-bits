import React from "react";
import { motion } from "framer-motion";
import Aurora from "./components/Aurora";
import "./App.css";
import AnimatedList from "./components/AnimatedList";
import TextType from "./components/TextType";
import SplitText from "./components/SplitText";
import GlitchText from "./components/GlitchText";
import ElectricBorder from "./components/ElectricBorder";
import DecryptedText from "./components/DecryptedText";
import ProfileCard from "./components/ProfileCard";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
/* =========================
   Helper: Small Icon SVGs
   ========================= */
const IconCheck = ({ className = "w-5 h-5 inline-block mr-2" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconStar = ({
  className = "w-4 h-4 inline-block mr-2 text-yellow-400",
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.597 0 9.75l8.332-1.732L12 .587z" />
  </svg>
);

/* =========================
   Navbar
   ========================= */
function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-[92%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-lg">
        {/* Left: logo */}
        <a href="#home" className="flex items-center gap-3">
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.5"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="9"
              ry="3.5"
              transform="rotate(120 12 12)"
            />
          </svg>
          <span className="text-white font-semibold text-lg">NASHA.</span>
        </a>

        {/* Center: nav links (hidden on small screens) */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:opacity-90 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:opacity-90 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:opacity-90 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:opacity-90 transition">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:opacity-90 transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:opacity-90 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: action buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="hidden sm:inline-block px-4 py-2 rounded-full bg-white text-gray-900 font-semibold shadow hover:bg-gray-200 transition"
          >
            Get Started
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full bg-white/6 hover:bg-white/12 transition"
            aria-label="Open menu"
            onClick={() => {
              // minimal mobile fallback: jump to menu (could open a drawer)
              document
                .getElementById("mobile-menu")
                ?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (simple dropdown) */}
      <div id="mobile-menu" className="hidden mt-3 md:hidden">
        <div className="bg-white/6 backdrop-blur-md rounded-xl px-4 py-3 text-white flex flex-col gap-2">
          <a href="#home" className="py-2">
            Home
          </a>
          <a href="#about" className="py-2">
            About
          </a>
          <a href="#services" className="py-2">
            Services
          </a>
          <a href="#portfolio" className="py-2">
            Portfolio
          </a>
          <a href="#pricing" className="py-2">
            Pricing
          </a>
          <a href="#contact" className="py-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

/* =========================
   Hero Section
   ========================= */
function Hero() {
  return (
    <header
      id="home"
      className="relative z-10 w-full h-screen flex items-center justify-center text-center px-6"
    >
      {/* Aurora background constrained to viewport */}
      <div className="absolute inset-0 -z-10">
        <Aurora
          colorStops={["#3A29FF", "#00FF88", "#FF94B4"]}
          blend={0}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          <TextType
            text={["Made in React", "By AHSAN at Softileo", "With Love 😍"]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-100/90 max-w-2xl mx-auto mb-8">
          <SplitText
            text="Build modern, beautiful, and interactive web experiences powered by
          creative visuals and thoughtful interactions."
            className="text-2xl font-semibold text-center"
            delay={50}
            duration={0.1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-3 rounded-2xl bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="px-6 py-3 rounded-2xl border border-white/40 font-semibold hover:bg-white/6 transition"
          >
            View Portfolio
          </a>
        </div>

        {/* small badges / random content */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm opacity-90">
          <span className="inline-flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full">
            <IconStar /> 4.9 rating
          </span>
          <span className="inline-flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full">
            <svg
              className="w-4 h-4 inline-block mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M3 12h18"></path>
            </svg>
            99% uptime
          </span>
          <span className="inline-flex items-center gap-2 bg-white/6 px-3 py-1 rounded-full">
            <svg
              className="w-4 h-4 inline-block mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 5v14"></path>
            </svg>
            Realtime analytics
          </span>
        </div>
      </div>
    </header>
  );
}

/* =========================
   About Section
   ========================= */
function About() {
  return (
    <section id="about" className="relative z-10 py-20 bg-gray-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <DecryptedText
                text="We Craft Meaningful Experiences"
                speed={100}
                maxIterations={20}
                characters="ABCD1234!?"
                animateOn="view"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </h2>
            <p className="mb-6 text-lg opacity-80">
              <SplitText
                text="Our team blends design, engineering and strategy to create
              outstanding digital products at scale. We believe in clarity,
              performance and human-centered design."
                className="font-semibold text-center"
                delay={50}
                duration={0.1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </p>
            <AnimatedList />
          </div>

          <ElectricBorder
            color="#1F8050"
            speed={5}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
          >
            <div className="rounded-xl bg-white/6 p-6">
              <h3 className="text-2xl font-semibold mb-3">Why pick us?</h3>
              <p className="mb-3 opacity-80">
                We balance speed and polish — delivering production-ready code
                and polished visuals.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/5">Fast delivery</div>
                <div className="p-3 rounded-lg bg-white/5">Reliable team</div>
                <div className="p-3 rounded-lg bg-white/5">
                  Transparent pricing
                </div>
                <div className="p-3 rounded-lg bg-white/5">Ongoing support</div>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Services Section
   ========================= */
function Services() {
  const services = [
    {
      title: "Product Design",
      desc: "User research, wireframes, prototypes and visual design.",
    },
    {
      title: "Web Development",
      desc: "React, Next.js, Node, and modern toolchains for product-grade apps.",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform apps using React Native or native solutions.",
    },
    {
      title: "Branding",
      desc: "Logo, identity and collateral that reflect your voice.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Scalable infra, CI/CD, monitoring and SRE practices.",
    },
    {
      title: "Support & Growth",
      desc: "Ongoing optimization and feature development.",
    },
  ];

  return (
    <section id="services" className="relative z-10 py-20 bg-gray-800/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          <DecryptedText
            text="Our Services"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!&()@&)*^)*%!?"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <ElectricBorder
              color="#1F8050"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                key={idx}
                className="p-6 rounded-xl bg-white/6 shadow-lg text-left"
              >
                <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="opacity-80">{s.desc}</p>
                <div className="mt-4">
                  <a
                    className="text-sm font-medium hover:underline"
                    href="#contact"
                  >
                    Get a quote →
                  </a>
                </div>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Portfolio Section
   ========================= */
function Portfolio() {
  const projects = [
    {
      title: "Aurora UI",
      tag: "Design System",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1673636348357?e=2147483647&v=beta&t=PSpU4mZFpMBmE14oWDnDwf5a8_4rdQUiCUKF_U-x584",
    },
    {
      title: "Streamline App",
      tag: "Web App",
      image:
        "https://www.celoxis.com/cassets/img/pmc/main-areas-project-management.png",
    },
    {
      title: "MarketOne",
      tag: "Ecommerce",
      image:
        "https://www.resourceumc.org/-/media/import/leadersimportweek1/project_management_for_church-645x430.jpg?iar=0&mh=478&mw=478&hash=D0EBA1FD8C6C2E3C5BAC371501A3607F",
    },
    {
      title: "Analytics Pro",
      tag: "Dashboard",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaUWaZeNOsShBkDcSbfvEoQ6jhEHM4UFzplNY6VlwEpMK3-Dix8ug54mGKCVlWlHkQu4&usqp=CAU",
    },
    {
      title: "Mobile Pulse",
      tag: "Mobile",
      image:
        "https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322",
    },
    {
      title: "LandingX",
      tag: "Marketing",
      image:
        "https://www.founderjar.com/wp-content/uploads/2022/07/project-design.jpeg",
    },
  ];

  return (
    <section id="portfolio" className="relative z-10 py-20 bg-gray-900/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">
          <DecryptedText
            text="Portfolio"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ElectricBorder
              key={i}
              color="#1F8050"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <article className="rounded-xl overflow-hidden shadow-lg group bg-white/5">
                <div className="h-44 md:h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300">{p.tag}</p>
                  <p className="text-sm opacity-80 my-3">
                    Short description of {p.title}: polished UI, fast
                    performance, and delightful micro-interactions.
                  </p>
                  <div className="flex items-center justify-between">
                    <a
                      href="#portfolio"
                      className="text-sm font-medium hover:underline"
                    >
                      View case study
                    </a>
                    <span className="text-xs opacity-80">
                      React • Tailwind • Node
                    </span>
                  </div>
                </div>
              </article>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Testimonials Section
   ========================= */
function Testimonials() {
  const items = [
    {
      name: "Client A",
      quote:
        "A game-changer for our product. They delivered quickly and professionally.",
    },
    {
      name: "Client B",
      quote: "Outstanding design and attention to detail. Highly recommended.",
    },
    {
      name: "Client C",
      quote:
        "Technical excellence and great communication through the project.",
    },
  ];

  return (
    <section id="testimonials" className="relative z-10 py-20 bg-gray-800/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          What Our Clients Say
        </h2>
        <div className="space-y-6">
          {items.map((it, idx) => (
            <ElectricBorder
              key={idx}
              color="#1F8050"
              speed={1}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <blockquote
                className="relative p-6 rounded-xl border border-white/20 shadow-lg 
                           bg-white/10 backdrop-blur-md overflow-hidden group"
              >
                {/* Glossy overlay highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-40 group-hover:opacity-60 transition"></div>

                <p className="italic mb-3 relative z-10 text-white/90">
                  "{it.quote}"
                </p>
                <footer className="font-semibold relative z-10 text-white">
                  — {it.name}
                </footer>
              </blockquote>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Pricing Section
   ========================= */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49/mo",
      perks: ["Basic templates", "Email support", "2 projects"],
    },
    {
      name: "Pro",
      price: "$149/mo",
      perks: ["Design system", "Priority support", "10 projects"],
    },
    {
      name: "Enterprise",
      price: "Custom",
      perks: ["Dedicated team", "SLA", "Unlimited projects"],
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-20 bg-gray-900/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          <DecryptedText
            text="Pricing"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!&()@&)*^)*%!?"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <ElectricBorder
              key={i}
              color="#1F8050"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div
                className={`p-6 rounded-xl relative z-10 ${
                  i === 1 ? "bg-white/10" : "bg-white/6"
                } shadow-lg backdrop-blur-md`}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {p.name}
                </h3>
                <div className="text-3xl font-bold mb-4 text-white">
                  {p.price}
                </div>
                <ul className="mb-6 text-left space-y-2">
                  {p.perks.map((perk, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start text-white/90"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.15, duration: 0.4 }}
                    >
                      <IconCheck className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="ml-2">{perk}</span>
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="border border-gray-50/40 inline-block px-6 py-2 rounded-lg bg-transparent text-white font-semibold transition hover:bg-gray-100 hover:text-black"
                >
                  Choose
                </a>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Team Section (random content)
   ========================= */
function Team() {
  const members = [
    {
      name: "Ahsan Martins",
      role: "Product Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Male
    },
    {
      name: "Hassan De' Suza",
      role: "Frontend Engineer",
      image: "https://randomuser.me/api/portraits/men/41.jpg", // Male
    },
    {
      name: "Anas Huan",
      role: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/76.jpg", // Male
    },
    {
      name: "Carlo Hamza",
      role: "Growth Lead",
      image: "https://randomuser.me/api/portraits/men/12.jpg", // Male
    },
  ];

  return (
    <section id="team" className="relative z-10 py-20 bg-gray-800/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          <DecryptedText
            text="Meet The Team"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!&()@&)*^)*%!?"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <ElectricBorder
              key={i}
              color="#1F8050"
              speed={1}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="p-6 rounded-xl bg-white/6 shadow-lg">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/20">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-white/70">{m.role}</p>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ Section
   ========================= */
function FAQ() {
  const faqs = [
    {
      q: "How long does a typical project take?",
      a: "Most projects take between 4-12 weeks depending on scope.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes — we offer maintenance and growth retainers.",
    },
    {
      q: "Can you work with our designers?",
      a: "Absolutely. We can collaborate with in-house or external design teams.",
    },
    {
      q: "What is your pricing model?",
      a: "We offer fixed-price engagements and monthly retainers based on scope.",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-20 bg-gray-900/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          <DecryptedText
            text="Frequently Asked Questions"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!&()@&)*^)*%!?"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>

        <div className="space-y-10">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ElectricBorder
                color="#1F8050"
                speed={1}
                chaos={0.4}
                thickness={2}
                style={{ borderRadius: 12 }}
              >
                <details className="p-10 rounded-lg bg-white/6 text-white">
                  <summary className="font-semibold cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="mt-2 opacity-80">{f.a}</p>
                </details>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Contact Section
   ========================= */
function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 bg-gray-800/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          <DecryptedText
            text="Contact Us"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!&()@&)*^)*%!?<>"
            animateOn="view"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </h2>
        <p className="mb-8 text-white/90">
          Let’s work together. Tell us about your project and we’ll get back in
          1 business day.
        </p>

        {/* Contact Form */}
        <form className="grid gap-4 text-left mb-20">
          <div className="grid sm:grid-cols-2 gap-4">
            <ElectricBorder
              color="#1F8050"
              speed={1}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 12 }}
            >
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-lg bg-white/10 border-none focus:outline-none w-full text-white"
              />
            </ElectricBorder>

            <ElectricBorder
              color="#1F8050"
              speed={1}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 12 }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-lg bg-white/10 border-none focus:outline-none w-full text-white"
              />
            </ElectricBorder>
          </div>

          <ElectricBorder
            color="#1F8050"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 12 }}
          >
            <input
              type="text"
              placeholder="Company (optional)"
              className="p-3 rounded-lg bg-white/10 border-none focus:outline-none w-full text-white"
            />
          </ElectricBorder>

          <ElectricBorder
            color="#1F8050"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 12 }}
          >
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
              className="p-3 rounded-lg bg-white/10 border-none focus:outline-none w-full text-white"
            ></textarea>
          </ElectricBorder>

          <div className="flex items-center gap-4">
            <ElectricBorder
              color="#1F8050"
              speed={1}
              chaos={0.4}
              thickness={2}
              style={{ borderRadius: 8 }}
            >
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-transparent text-white font-semibold w-full"
              >
                Send Message
              </button>
            </ElectricBorder>

            <a
              href="mailto:hello@example.com"
              className="text-sm text-white/80"
            >
              OR{" "}
              <span className="text-green-400 underline">
                email us directly
              </span>
            </a>
          </div>
        </form>

        {/* Contact Info with Electric Border */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 text-sm text-white">
          {[
            { title: "Location", text: "Sargodha, Pakistan" },
            { title: "Email", text: "ranaahsan326435@gmail.com" },
            { title: "Phone", text: "+92 349 7983082" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ElectricBorder
                color="#1F8050"
                speed={1}
                chaos={0.4}
                thickness={2}
                style={{ borderRadius: 12 }}
              >
                <div className="p-4 rounded-lg bg-white/10 text-white">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   Footer
   ========================= */
function Footer() {
  return (
    <footer className="relative z-10 py-10 bg-gray-900/10">
      {/* Gray hr */}
      <hr className="border-gray-50" />

      <div className="mt-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left logo + brand wrapped in ElectricBorder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ElectricBorder
            color="#1F8050"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 12 }}
          >
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/6 text-white">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="2.2" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" />
              </svg>
              <div>
                <div className="font-semibold">NASHA.</div>
                <div className="text-sm opacity-80">
                  © {new Date().getFullYear()} NASHA. All rights reserved.
                </div>
              </div>
            </div>
          </ElectricBorder>
        </motion.div>

        {/* Right links wrapped in ElectricBorder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ElectricBorder
            color="#1F8050"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 12 }}
          >
            <div className="flex items-center gap-4 text-sm opacity-90 p-4 rounded-lg bg-white/6 text-white">
              <a href="#privacy" className="hover:underline">
                Privacy
              </a>
              <a href="#terms" className="hover:underline">
                Terms
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </ElectricBorder>
        </motion.div>
      </div>
    </footer>
  );
}
/* =========================
   LandingPage - Combine all
   ========================= */
export default function LandingPage() {
  return (
    <div className="relative w-full min-h-screen text-white bg-black overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Team />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

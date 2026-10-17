"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "bookmyshow.",
    description: "A movie-ticket booking application focused on the backend details that matter: seat selection, booking and cancellation, transactional workflows, and pessimistic locking.",
    tags: ["Java", "Spring Boot", "JPA / Hibernate", "MySQL", "REST API"],
    href: "https://github.com/AdilAli-web/Bookmyshow-Full-Stack",
    kind: "Backend · Booking system",
  },
  {
    number: "02",
    name: "task management api.",
    description: "A task management REST API with CRUD endpoints, a controller–service–repository structure, persistent storage, and Docker support for the app and database.",
    tags: ["Java 21", "Spring Boot", "MySQL", "Docker", "Maven"],
    href: "https://github.com/AdilAli-web/taskmanagement",
    kind: "REST API · Docker",
  },
  {
    number: "03",
    name: "spring security basics.",
    description: "A focused learning repository for getting more comfortable with Spring Security and the building blocks of securing Java backend applications.",
    tags: ["Java", "Spring Boot", "Spring Security"],
    href: "https://github.com/AdilAli-web/springsecurityBasics",
    kind: "Learning project",
  },
];

const services = [
  { title: "backend development", items: ["core java & oop", "spring boot & spring mvc", "rest api design", "jpa / hibernate", "validation & exception handling"] },
  { title: "data & persistence", items: ["mysql & sql", "entity relationships", "jpql & join fetch", "transactions & locking", "jdbc fundamentals"] },
  { title: "tools & systems", items: ["docker & compose", "git & maven", "postman", "kafka fundamentals", "microservices concepts"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>{children}</motion.div>;
}

function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {show && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.65, ease: "easeInOut" }}>
        <motion.p initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.075 } } }}>
          {"# a d i l .".split("").map((char, i) => <motion.span key={i} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } } }}>{char === " " ? "\u00a0" : char}</motion.span>)}
        </motion.p>
      </motion.div>}
    </AnimatePresence>
  );
}

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 38, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 450, damping: 38, mass: 0.35 });
  const [active, setActive] = useState(false);
  const size = useTransform(() => active ? 40 : 8);
  useEffect(() => {
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); };
    const over = (event: MouseEvent) => setActive(Boolean((event.target as HTMLElement).closest("a, button, [data-cursor]")));
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseover", over); };
  }, [x, y]);
  return <motion.div aria-hidden="true" className="custom-cursor" style={{ x: springX, y: springY, width: size, height: size }} />;
}

function SmoothScroll() {
  useEffect(() => {
    const Lenis = require("lenis").default;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(frame); lenis.destroy(); };
  }, []);
  return null;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <main className="site-shell">
      <Preloader />
      <Cursor />
      <SmoothScroll />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Adil home"># adil.</a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#works">works</a><a href="#services">services</a><a href="#about">about</a><a href="#contact">contact</a>
        </nav>
        <div className="nav-tools">
          <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? "☼" : "◐"}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "close −" : "menu +"}</button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-overlay" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} aria-label="Mobile navigation">
          {["works", "services", "about", "contact"].map((item) => <a href={"#" + item} key={item} onClick={() => setMenuOpen(false)}>{item} <span>↘</span></a>)}
        </motion.nav>}
      </AnimatePresence>

      <section className="hero section-wrap" id="top">
        <Reveal>
          <p className="hero-name"># a d i l.</p>
          <h1>## backend developer.</h1>
          <p className="hero-intro">I’m Adil Ali, an MCA student focused on Java backend development. I build Spring Boot APIs, work with relational databases, and learn by understanding how the pieces fit together.</p>
          <a href="#works" className="scroll-indicator" aria-label="Scroll to selected work"><span>↓</span><i /> scroll to explore</a>
        </Reveal>
        <motion.div className="hero-aside" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.8 }}>
          <span>JAVA · SPRING BOOT</span><span>REST APIS · MYSQL</span><span>DOCKER · KAFKA*</span><small>* Kafka is a current learning focus.</small>
        </motion.div>
      </section>

      <section id="works" className="section-wrap content-section">
        <Reveal><div className="section-head"><p className="section-kicker">01 / selected work</p><h2>## works.</h2></div></Reveal>
        <div className="work-list">
          {projects.map((project) => <Reveal key={project.number} className="work-reveal">
            <a className="work-item" href={project.href} target="_blank" rel="noreferrer" data-cursor>
              <span className="work-number">{project.number}</span>
              <div className="work-main"><span className="work-kind">{project.kind}</span><h3>{project.name} <span className="work-arrow">↗</span></h3><p>{project.description}</p><ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
              <span className="work-open">view repo ↗</span>
            </a>
          </Reveal>)}
        </div>
      </section>

      <section className="photo-section" aria-label="A little about my process">
        <motion.div className="photo-panel" style={{ y: 0 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.7 }}>
          <div className="photo-caption"><span>BUILD / BREAK / UNDERSTAND</span><span>REPEAT AS NEEDED ↘</span></div>
          <div className="photo-type" aria-hidden="true">less magic.<br /><em>more understanding.</em></div>
          <div className="photo-code" aria-hidden="true"><span>try {'{'}</span><span> &nbsp; learnSomethingNew();</span><span>{'}'} catch (error) {'{'}</span><span> &nbsp; readTheDocs();</span><span>{'}'}</span></div>
        </motion.div>
      </section>

      <section id="services" className="section-wrap content-section">
        <Reveal><div className="section-head"><p className="section-kicker">02 / what I work with</p><h2>## services.</h2></div></Reveal>
        <div className="services-grid">
          {services.map((service, index) => <Reveal key={service.title} className="service-item"><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><ul>{service.items.map((item) => <li key={item}>— &nbsp;{item}</li>)}</ul></Reveal>)}
        </div>
        <p className="skills-note">I’m strongest in Java and Spring Boot fundamentals. Docker is hands-on practice; Kafka and microservices are areas I’m actively learning.</p>
      </section>

      <section id="about" className="section-wrap content-section about-section">
        <Reveal><div className="section-head"><p className="section-kicker">03 / a little context</p><h2>## about.</h2></div></Reveal>
        <div className="about-grid">
          <Reveal><p className="about-statement">I like backend work because the details matter.</p></Reveal>
          <Reveal><div className="about-copy"><p>I’m an MCA student working toward a Java backend role. Most of my learning happens by building projects, testing ideas, and tracing a problem until I understand why it happened.</p><p>Recently, I’ve containerized a Spring Boot API and MySQL with Docker Compose, explored persistent volumes, and studied Kafka topics, partitions, consumer groups, and the move from ZooKeeper to KRaft.</p><p>Alongside projects, I keep strengthening Core Java, data structures, and the practical decisions behind reliable APIs.</p><a className="inline-link" href="https://github.com/AdilAli-web" target="_blank" rel="noreferrer">more on github ↗</a></div></Reveal>
        </div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <Reveal><p className="section-kicker">04 / say hello</p><h2>## contact.</h2><a className="contact-cta" href="https://github.com/AdilAli-web" target="_blank" rel="noreferrer">let’s work together <span>→</span></a><p className="contact-note">Open to entry-level Java backend opportunities and conversations about building useful things.</p></Reveal>
        <div className="social-row"><a href="https://github.com/AdilAli-web" target="_blank" rel="noreferrer">github ↗</a><a href="https://www.linkedin.com/in/adil-ali-0563341b3" target="_blank" rel="noreferrer">linkedin ↗</a><a href="https://x.com/" target="_blank" rel="noreferrer">twitter / x ↗</a></div>
      </section>
      <footer className="site-footer"><span>© 2026 adil ali. all rights reserved.</span><span>built with next.js & a lot of curiosity.</span><a href="#top">back to top ↑</a></footer>
    </main>
  );
}

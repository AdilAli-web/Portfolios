import Head from "next/head";
import { useState } from "react";

const skillGroups = [
  {
    title: "Java",
    number: "01",
    items: ["Core Java", "OOP", "Collections", "Generics", "Exception Handling", "Java Streams", "Multithreading", "JDBC", "Comparable & Comparator", "equals() / hashCode()"]
  },
  {
    title: "Spring & Backend",
    number: "02",
    items: ["Spring Boot", "Spring MVC", "REST APIs", "Spring Data JPA", "Hibernate", "DTOs", "Bean Validation", "Global Exception Handling", "Spring Security", "Transactions"]
  },
  {
    title: "Databases",
    number: "03",
    items: ["MySQL", "SQL", "Joins", "Entity Relationships", "JPQL", "JOIN FETCH", "DBeaver", "MySQL Workbench"]
  },
  {
    title: "Tools & Workflow",
    number: "04",
    items: ["Docker", "Docker Compose", "Images & Containers", "Container Networking", "Named Volumes", "Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA"]
  },
  {
    title: "Problem Solving",
    number: "05",
    items: ["Data Structures & Algorithms", "Arrays & Strings", "HashMap", "Two Pointers", "Sliding Window", "Linked Lists", "Searching & Sorting", "Time / Space Complexity"]
  },
  {
    title: "System Concepts",
    number: "06",
    items: ["Layered Architecture", "Microservices Fundamentals", "API Gateway Concepts", "Concurrency", "Kafka Topics & Partitions", "Consumer Groups", "ZooKeeper vs KRaft"]
  }
];

const projects = [
  {
    index: "01",
    category: "FEATURED · BACKEND",
    title: "BookMyShow — Ticket Booking",
    description: "A full-stack movie-ticket booking app with movie and show discovery, seat selection, booking history and cancellation. The backend uses transactions and pessimistic locking to help prevent two users from booking the same seat.",
    highlights: ["Seat reservation & cancellation", "Pessimistic locking", "DTO validation & exception handling", "JPQL and JOIN FETCH"],
    stack: ["Java 21", "Spring Boot", "JPA / Hibernate", "MySQL", "REST API"],
    href: "https://github.com/AdilAli-web/Bookmyshow-Full-Stack",
    linkLabel: "Explore project"
  },
  {
    index: "02",
    category: "DOCKER · REST API",
    title: "Task Management API",
    description: "A REST API for creating, viewing, updating and deleting tasks. It follows a controller-service-repository structure and includes database persistence, Spring Security configuration, and Docker support for the application and MySQL.",
    highlights: ["CRUD REST endpoints", "Layered architecture", "JPA / Hibernate persistence", "Dockerized app + database"],
    stack: ["Java 21", "Spring Boot", "MySQL", "Docker", "Maven"],
    href: "https://github.com/AdilAli-web/taskmanagement",
    linkLabel: "Explore project"
  },
  {
    index: "03",
    category: "CORE JAVA",
    title: "Java Banking System",
    description: "A console-based banking project used to practice object-oriented design and Java fundamentals through everyday banking workflows.",
    highlights: ["Account registration and login", "Deposit and withdrawal", "Balance checking", "Transaction history"],
    stack: ["Java", "OOP", "Collections"],
    href: "https://github.com/AdilAli-web/Java-Bank-Easy",
    linkLabel: "Explore project"
  },
  {
    index: "04",
    category: "APPLICATION PROJECT",
    title: "StudyMate",
    description: "A study-focused project in my portfolio. Visit the repository for its current implementation and details as the project evolves.",
    highlights: ["Student-focused use case", "Application development practice", "Iterative learning project"],
    stack: ["JavaScript", "React", "API concepts"],
    href: "https://github.com/AdilAli-web/StudyMate",
    linkLabel: "Explore project"
  }
];

const learningItems = [
  {
    number: "01",
    title: "Docker & Docker Compose",
    status: "HANDS-ON PRACTICE",
    text: "Containerized a Spring Boot REST API, ran MySQL in a separate container, connected services with Docker Compose, and used a named volume to keep database data persistent across container recreation."
  },
  {
    number: "02",
    title: "Apache Kafka",
    status: "CURRENTLY LEARNING",
    text: "Learning the architecture behind topics, partitions and consumer groups, how consumers can process partitions in parallel, and the difference between ZooKeeper-based Kafka and the newer KRaft architecture."
  },
  {
    number: "03",
    title: "Microservices & API Gateway",
    status: "BUILDING THE FOUNDATION",
    text: "Understanding service routing, what an API Gateway is responsible for, and how independently running services communicate in a backend system."
  }
];

function SectionLabel({ children }) {
  return <div className="section-label">{children}</div>;
}

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Learning", "learning"],
    ["Contact", "contact"]
  ];

  return (
    <>
      <Head>
        <title>Adil Ali | Java Backend Developer</title>
        <meta name="description" content="Adil Ali's portfolio — Java, Spring Boot, REST APIs, MySQL, Docker and Kafka." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1020" />
      </Head>

      <div className="site">
        <header className="navbar">
          <a className="wordmark" href="#home" aria-label="Adil Ali home">
            <span className="wordmark-icon">A<span>.</span></span>
            <span>ADIL ALI <small>JAVA BACKEND</small></span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
            {menuOpen ? "Close ×" : "Menu ☰"}
          </button>
          <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
            {nav.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <a className="nav-github" href="https://github.com/AdilAli-web" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </nav>
        </header>

        <main>
          <section id="home" className="hero wrap">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> MCA STUDENT <span className="eyebrow-sep">/</span> JAVA BACKEND DEVELOPER</div>
              <h1>I build the logic<br />behind <span className="gradient">the product.</span></h1>
              <p className="hero-intro">I’m Adil Ali — focused on Java, Spring Boot and backend development. I enjoy building APIs, working with databases, and understanding how applications behave beyond the happy path.</p>
              <p className="hero-intro second">Lately, that has meant containerizing applications with Docker, learning Kafka architecture, and getting better at the fundamentals one project at a time.</p>
              <div className="hero-buttons">
                <a href="#projects" className="button button-primary">See my projects <span>↓</span></a>
                <a href="#contact" className="button button-outline">Let’s connect <Arrow /></a>
              </div>
              <div className="hero-footnote"><span className="availability-dot" /> Open to entry-level Java backend opportunities</div>
            </div>

            <div className="hero-visual">
              <div className="visual-grid" />
              <div className="ring ring-a" /><div className="ring ring-b" />
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-dots"><i /><i /><i /></div>
                  <span>BookingService.java</span>
                  <span className="terminal-tag">SPRING BOOT</span>
                </div>
                <div className="terminal-content">
                  <div><span className="line-no">01</span><span className="syntax-purple">@Transactional</span></div>
                  <div><span className="line-no">02</span><span className="syntax-blue">public</span> Booking <span className="syntax-yellow">bookSeats</span>(</div>
                  <div><span className="line-no">03</span> &nbsp; BookingRequest request) {'{'}</div>
                  <div><span className="line-no">04</span> &nbsp; validate(request);</div>
                  <div><span className="line-no">05</span> &nbsp; lockSelectedSeats();</div>
                  <div><span className="line-no">06</span> &nbsp; reserveAvailableSeats();</div>
                  <div><span className="line-no">07</span> &nbsp; <span className="syntax-green">return</span> saveBooking();</div>
                  <div><span className="line-no">08</span>{'}'}</div>
                </div>
                <div className="terminal-footer"><span><i /> API workflow</span><span>Java · JPA · MySQL</span></div>
              </div>
              <div className="floating-card float-docker"><span className="float-icon docker-icon">▣</span><span><b>Docker</b><small>Compose · Volumes</small></span></div>
              <div className="floating-card float-kafka"><span className="float-icon kafka-icon">⌁</span><span><b>Kafka</b><small>Architecture learning</small></span></div>
              <div className="visual-caption">BUILD <span>·</span> DEBUG <span>·</span> UNDERSTAND</div>
            </div>
            <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
          </section>

          <div className="tech-strip"><div className="tech-strip-inner">
            {["JAVA", "SPRING BOOT", "REST APIs", "MYSQL", "DOCKER", "KAFKA", "DSA"].map((name) => <span key={name}>{name}<b>✳</b></span>)}
          </div></div>

          <section id="about" className="wrap section about-section">
            <SectionLabel>01 — ABOUT ME</SectionLabel>
            <div className="about-grid">
              <h2>Curious about<br /><span className="muted">what happens<br />under the hood.</span></h2>
              <div className="about-copy">
                <p className="about-lead">I’m an MCA student working toward a career in Java backend development. I prefer learning by building something real, then digging into the details when it breaks or behaves unexpectedly.</p>
                <p>My focus is writing understandable backend code, designing REST endpoints, connecting applications to relational databases, and getting comfortable with the tools used to run them. I’m also strengthening DSA and core Java alongside project work.</p>
                <div className="about-list">
                  <div><span>01</span> Build practical Spring Boot APIs</div>
                  <div><span>02</span> Understand data, transactions and edge cases</div>
                  <div><span>03</span> Learn container and messaging fundamentals</div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills" className="section section-alt">
            <div className="wrap">
              <div className="section-heading">
                <div><SectionLabel>02 — MY TOOLKIT</SectionLabel><h2>Skills & technologies<span className="heading-dot">.</span></h2></div>
                <p>Backend development is my main focus. These are the languages, frameworks and tools I’ve been using or actively studying.</p>
              </div>
              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <article className="skill-card" key={group.number}>
                    <div className="skill-top"><span>{group.number}</span><i>{["{ }", "↗", "◫", "⌘", "⌁", "◎"][Number(group.number) - 1]}</i></div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </article>
                ))}
              </div>
              <p className="skill-disclaimer">I’m continuing to build depth in these areas. Kafka and microservices concepts are current learning topics, not claims of production experience.</p>
            </div>
          </section>

          <section id="projects" className="wrap section projects-section">
            <div className="section-heading">
              <div><SectionLabel>03 — SELECTED PROJECTS</SectionLabel><h2>Things I’ve been<br /><span className="muted">working on.</span></h2></div>
              <a className="text-link" href="https://github.com/AdilAli-web?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <Arrow /></a>
            </div>
            <div className="projects-grid">
              {projects.map((project, i) => (
                <article className="project-card" key={project.index}>
                  <div className={`project-banner banner-${i + 1}`}>
                    <div className="project-banner-top"><span>PROJECT / {project.index}</span><span>{project.category}</span></div>
                    <div className="project-shape" aria-hidden="true">{["▦", "☷", "₹", "✳"][i]}</div>
                    <div className="banner-lines" />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-highlights">{project.highlights.map((item) => <span key={item}><b>↗</b> {item}</span>)}</div>
                    <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <Arrow /></a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="learning" className="section learning-section">
            <div className="wrap">
              <div className="section-heading">
                <div><SectionLabel>04 — CURRENTLY LEARNING</SectionLabel><h2>Putting the pieces<br /><span className="muted">together.</span></h2></div>
                <p>I’m interested in how backend applications run in real environments, not just how to make an endpoint work on my local machine.</p>
              </div>
              <div className="learning-list">
                {learningItems.map((item) => (
                  <article className="learning-row" key={item.number}>
                    <span className="learning-number">{item.number}</span>
                    <div className="learning-main"><div className="learning-title-line"><h3>{item.title}</h3><span>{item.status}</span></div><p>{item.text}</p></div>
                    <span className="learning-mark">↗</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="wrap contact-wrap">
              <SectionLabel>05 — LET’S CONNECT</SectionLabel>
              <div className="contact-grid">
                <div><h2>Good code starts<br />with a <span className="gradient">conversation.</span></h2><p>I’m looking for opportunities to learn from a team, contribute to backend projects, and keep growing as a developer.</p></div>
                <div className="contact-card">
                  <a href="https://github.com/AdilAli-web" target="_blank" rel="noreferrer"><span>GITHUB</span><b>AdilAli-web</b><Arrow /></a>
                  <a href="https://www.linkedin.com/in/adil-ali-0563341b3" target="_blank" rel="noreferrer"><span>LINKEDIN</span><b>Connect with me</b><Arrow /></a>
                </div>
              </div>
              <footer className="footer"><span>ADIL ALI <i>·</i> JAVA BACKEND DEVELOPMENT</span><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()}</span></footer>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

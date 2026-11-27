import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const PHONE = "516-373-8437";
const EMAIL = "Kevinzaldivar00@gmail.com";
const INSTAGRAM = "https://www.instagram.com/zpainting.corp";

// Contenidos fáciles de editar: agrega o reemplaza elementos aquí.
const heroImages = [
  `${import.meta.env.BASE_URL}media/photos/hero-interior.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/hero-kitchen.jpeg`,
];

const projectImages = [
  `${import.meta.env.BASE_URL}media/photos/project-kitchen.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/project-builtins.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/project-trim.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/project-deck.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/project-garage-floor.jpeg`,
  `${import.meta.env.BASE_URL}media/photos/project-entry.jpeg`,
];

const translations = {
  en: {
    metaDescription: "Zaldivar Painting Corp - Residential and commercial painting in New York.",
    languageButton: "Español",
    languageLabel: "Switch website language to Spanish",
    navigationLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    topbar: "Free estimates",
    coverage: "Serving all of New York",
    nav: {
      services: "Services",
      projects: "Projects",
      videos: "Videos",
      process: "Our process",
      estimate: "Get a free estimate",
    },
    hero: {
      eyebrow: "RESIDENTIAL & COMMERCIAL PAINTING",
      headline: "Spaces that feel",
      emphasis: "brand new.",
      text: "We bring precision, care, and elevated finishes to every corner. Residential and commercial painting throughout New York.",
      contact: "Let's talk about your project",
      projects: "View projects",
      imageLabel: "Examples of our painting work",
      interiorAlt: "Renovated living room with coffered ceilings",
      kitchenAlt: "Kitchen with refreshed cabinets and finishes",
      sealStrong: "Your property",
      sealText: "always protected",
    },
    intro: {
      label: "Introduction",
      headline: "From the first coat to the",
      emphasis: "final detail.",
      coverage: "Serving all of",
      newYork: "New York",
      protected: "Protected spaces",
      beforePainting: "before painting",
      team: "Professional &",
      attentive: "attentive",
    },
    services: {
      eyebrow: "WHAT WE DO",
      headline: "Services designed to",
      emphasis: "transform.",
      description: "Every surface gets the preparation and care it needs.",
      items: [
        { title: "Interior & exterior painting", text: "Clean, durable finishes for homes and commercial properties." },
        { title: "Cabinets, kitchens & furniture", text: "Refresh existing surfaces with precision and attention to detail." },
        { title: "Drywall, joint compound & repairs", text: "We fix imperfections before applying the final finish." },
        { title: "Staining & pressure washing", text: "Professional protection and cleaning for outdoor surfaces and wood." },
      ],
      estimateLabel: "Request an estimate for",
    },
    projects: {
      eyebrow: "RECENT PROJECTS",
      headline: "Work you can see.",
      emphasis: "Quality built to last.",
      instagram: "More on Instagram",
      enlarge: "View project",
      items: [
        { category: "Kitchen", title: "Cabinet refinishing" },
        { category: "Built-ins", title: "Built-in cabinetry" },
        { category: "Interior details", title: "Trim & finish details" },
        { category: "Exterior", title: "Deck refinishing" },
        { category: "Flooring", title: "Garage floor coating" },
        { category: "Exterior painting", title: "Front door preparation" },
      ],
      close: "Close",
    },
    videos: {
      eyebrow: "PROJECT VIDEOS",
      headline: "The work,",
      emphasis: "in motion.",
      description: "A closer look at the process and finishes behind our real projects.",
      project: "PROJECT",
      title: "A closer look at our work",
      fallback: "Your browser does not support this video.",
      label: "Project video",
    },
    process: {
      eyebrow: "OUR PROCESS",
      headline: "A clear process.",
      emphasis: "Exceptional results.",
      steps: [
        { title: "Listen", text: "We learn your vision, schedule, and goals for the project." },
        { title: "Protect", text: "We cover floors, furniture, and sensitive areas before work begins." },
        { title: "Transform", text: "We prepare, paint, and finish every surface with care." },
        { title: "Deliver", text: "We review every detail with you and leave the space clean." },
      ],
    },
    contact: {
      eyebrow: "LET'S START YOUR PROJECT",
      headline: "Let's create something",
      emphasis: "that lasts.",
      estimate: "Request your free estimate",
      emailSubject: "Free estimate request",
      phone: "CALL US",
      address: "ADDRESS",
      instagram: "INSTAGRAM",
    },
    footer: "All rights reserved.",
  },
  es: {
    metaDescription: "Zaldivar Painting Corp - Pintura residencial y comercial en Nueva York.",
    languageButton: "English",
    languageLabel: "Cambiar el idioma del sitio a inglés",
    navigationLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    topbar: "Estimados gratis",
    coverage: "Servicio en todo Nueva York",
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      videos: "Videos",
      process: "Cómo trabajamos",
      estimate: "Solicitar estimado gratis",
    },
    hero: {
      eyebrow: "PINTURA RESIDENCIAL & COMERCIAL",
      headline: "Espacios que se",
      emphasis: "sienten nuevos.",
      text: "Aportamos precisión, cuidado y acabados que elevan cada rincón. Pintura residencial y comercial en toda Nueva York.",
      contact: "Hablemos de tu proyecto",
      projects: "Ver proyectos",
      imageLabel: "Ejemplos de trabajos de pintura",
      interiorAlt: "Sala renovada con techos artesonados",
      kitchenAlt: "Cocina con gabinetes y acabados renovados",
      sealStrong: "Tu propiedad",
      sealText: "siempre protegida",
    },
    intro: {
      label: "Presentación",
      headline: "De la primera capa al",
      emphasis: "último detalle.",
      coverage: "Cobertura en todo",
      newYork: "Nueva York",
      protected: "Área protegida",
      beforePainting: "antes de pintar",
      team: "Responsable y",
      attentive: "atento",
    },
    services: {
      eyebrow: "QUÉ HACEMOS",
      headline: "Servicios pensados para",
      emphasis: "transformar.",
      description: "Cada superficie cuenta con la preparación y el cuidado que necesita.",
      items: [
        { title: "Pintura interior y exterior", text: "Acabados limpios y duraderos para hogares y edificios." },
        { title: "Gabinetes, cocinas y muebles", text: "Renovamos superficies existentes con precisión y detalle." },
        { title: "Drywall, compound y reparaciones", text: "Corregimos imperfecciones antes de aplicar el acabado final." },
        { title: "Stain y lavado a presión", text: "Protección y limpieza profesional para exteriores y madera." },
      ],
      estimateLabel: "Solicitar estimado para",
    },
    projects: {
      eyebrow: "PROYECTOS RECIENTES",
      headline: "Trabajo que se ve.",
      emphasis: "Calidad que perdura.",
      instagram: "Más en Instagram",
      enlarge: "Ampliar proyecto",
      items: [
        { category: "Cocina", title: "Renovación de gabinetes" },
        { category: "Carpintería", title: "Gabinetes a medida" },
        { category: "Detalles interiores", title: "Molduras y acabados" },
        { category: "Exterior", title: "Deck con acabado renovado" },
        { category: "Pisos", title: "Recubrimiento para garaje" },
        { category: "Pintura exterior", title: "Preparación de puerta de entrada" },
      ],
      close: "Cerrar",
    },
    videos: {
      eyebrow: "TRABAJOS EN VIDEO",
      headline: "El trabajo,",
      emphasis: "en movimiento.",
      description: "Una mirada a los procesos y acabados reales de nuestros proyectos.",
      project: "PROYECTO",
      title: "Proceso y detalles del trabajo",
      fallback: "Tu navegador no puede reproducir este video.",
      label: "Video de proyecto",
    },
    process: {
      eyebrow: "CÓMO TRABAJAMOS",
      headline: "Un proceso claro.",
      emphasis: "Un resultado excepcional.",
      steps: [
        { title: "Escuchamos", text: "Entendemos tu visión, tus tiempos y el resultado que buscas." },
        { title: "Protegemos", text: "Cubrimos pisos, muebles y áreas sensibles antes de comenzar." },
        { title: "Transformamos", text: "Preparación, aplicación y acabados cuidadosos en cada superficie." },
        { title: "Entregamos", text: "Revisamos los detalles contigo y dejamos todo limpio." },
      ],
    },
    contact: {
      eyebrow: "INICIEMOS TU PROYECTO",
      headline: "Hagamos algo",
      emphasis: "que dure.",
      estimate: "Solicita tu estimado gratis",
      emailSubject: "Solicitud de estimado",
      phone: "LLÁMANOS",
      address: "DIRECCIÓN",
      instagram: "INSTAGRAM",
    },
    footer: "Todos los derechos reservados.",
  },
};

const projectVideos = Array.from({ length: 7 }, (_, index) => ({
  number: String(index + 1).padStart(2, "0"),
  source: `${import.meta.env.BASE_URL}media/videos/project-video-${String(index + 1).padStart(2, "0")}.mp4`,
  poster: projectImages[index % projectImages.length],
}));

function Arrow({ down = false }) {
  return <span className={down ? "arrow arrow-down" : "arrow"} aria-hidden="true">↗</span>;
}

function Logo({ label }) {
  return (
    <a className="brand" href="#inicio" aria-label={label}>
      <span className="brand-mark" aria-hidden="true"><span>Z</span></span>
      <span className="brand-name">ZALDIVAR<span>PAINTING CORP</span></span>
    </a>
  );
}

function ProjectVideoCard({ video, content, project }) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="video-card">
      <div className="video-frame">
        <img className="video-poster" src={video.poster} alt="" aria-hidden="true" />
        <video
          controls
          playsInline
          preload="metadata"
          poster={video.poster}
          aria-label={`${content.videos.label} ${video.number}: ${project.title}`}
          onError={() => setHasError(true)}
          onPlaying={() => setHasError(false)}
        >
          <source src={video.source} type="video/mp4" />
          {content.videos.fallback}
        </video>
        {hasError && (
          <div className="video-error" role="alert">
            <span aria-hidden="true">!</span>
            <p>{content.videos.fallback}</p>
          </div>
        )}
      </div>
      <div className="video-caption">
        <small>{content.videos.project} {video.number}</small>
        <h3>{project.title}</h3>
      </div>
    </article>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const content = translations[language];
  const services = content.services.items;
  const projects = content.projects.items.map((project, index) => ({
    ...project,
    image: projectImages[index],
  }));
  const processSteps = content.process.steps;

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]').setAttribute("content", content.metaDescription);
  }, [content.metaDescription, language]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => {
    setLanguage((current) => current === "en" ? "es" : "en");
    setSelectedProject(null);
    closeMenu();
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <p>{content.topbar} <span>·</span> {content.coverage}</p>
          <a href={`tel:+1${PHONE.replaceAll("-", "")}`}>{PHONE}</a>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Logo label={`Zaldivar Painting Corp - ${language === "en" ? "Home" : "Inicio"}`} />
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? content.closeMenu : content.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={menuOpen ? "nav is-open" : "nav"} aria-label={content.navigationLabel}>
            <a href="#servicios" onClick={closeMenu}>{content.nav.services}</a>
            <a href="#proyectos" onClick={closeMenu}>{content.nav.projects}</a>
            <a href="#videos" onClick={closeMenu}>{content.nav.videos}</a>
            <a href="#como-trabajamos" onClick={closeMenu}>{content.nav.process}</a>
            <a className="nav-cta" href="#contacto" onClick={closeMenu}>{content.nav.estimate} <Arrow /></a>
            <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={content.languageLabel}>
              {content.languageButton}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1>{content.hero.headline} <em>{content.hero.emphasis}</em></h1>
              <p className="hero-text">{content.hero.text}</p>
              <div className="hero-actions">
                <a className="button button-aqua" href="#contacto">{content.hero.contact} <Arrow /></a>
                <a className="text-link" href="#proyectos">{content.hero.projects} <Arrow /></a>
              </div>
            </div>

            <div className="hero-visual" aria-label={content.hero.imageLabel}>
              <div className="hero-frame hero-frame-main">
                <img src={heroImages[0]} alt={content.hero.interiorAlt} />
              </div>
              <div className="hero-frame hero-frame-secondary">
                <img src={heroImages[1]} alt={content.hero.kitchenAlt} />
              </div>
              <div className="trust-seal">
                <span className="seal-icon">✓</span>
                <p><strong>{content.hero.sealStrong}</strong><br />{content.hero.sealText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-band" aria-label={content.intro.label}>
          <div className="container intro-grid">
            <h2>{content.intro.headline} <em>{content.intro.emphasis}</em></h2>
            <div className="intro-stat"><strong>NY</strong><span>{content.intro.coverage}<br />{content.intro.newYork}</span></div>
            <div className="intro-stat"><strong>100%</strong><span>{content.intro.protected}<br />{content.intro.beforePainting}</span></div>
            <div className="intro-stat"><strong>{language === "en" ? "Team" : "Equipo"}</strong><span>{content.intro.team}<br />{content.intro.attentive}</span></div>
          </div>
        </section>

        <section className="section services" id="servicios">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow dark">{content.services.eyebrow}</p>
                <h2>{content.services.headline} <em>{content.services.emphasis}</em></h2>
              </div>
              <p>{content.services.description}</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a href="#contacto" aria-label={`${content.services.estimateLabel} ${service.title}`}><Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="container">
            <div className="section-heading projects-heading">
              <div>
                <p className="eyebrow dark">{content.projects.eyebrow}</p>
                <h2>{content.projects.headline} <em>{content.projects.emphasis}</em></h2>
              </div>
              <a className="instagram-link" href={INSTAGRAM} target="_blank" rel="noreferrer">{content.projects.instagram} <Arrow /></a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <button
                  className={`project-card project-card-${index + 1}`}
                  type="button"
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`${content.projects.enlarge}: ${project.title}`}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="project-overlay">
                    <small>{project.category}</small>
                    <strong>{project.title}</strong>
                  </span>
                  <span className="project-expand" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedProject && (
          <div className="modal" role="dialog" aria-modal="true" aria-label={`${content.projects.enlarge}: ${selectedProject.title}`} onClick={() => setSelectedProject(null)}>
            <button className="modal-close" type="button" aria-label={content.projects.close} onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <p><small>{selectedProject.category}</small>{selectedProject.title}</p>
            </div>
          </div>
        )}

        <section className="video-section" id="videos" aria-labelledby="videos-title">
          <div className="container">
            <div className="video-heading">
              <div>
                <p className="eyebrow">{content.videos.eyebrow}</p>
                <h2 id="videos-title">{content.videos.headline} <em>{content.videos.emphasis}</em></h2>
              </div>
              <p>{content.videos.description}</p>
            </div>
            <div className="video-grid">
              {projectVideos.map((video, index) => (
                <ProjectVideoCard
                  key={video.number}
                  video={video}
                  content={content}
                  project={content.projects.items[index % content.projects.items.length]}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="como-trabajamos">
          <div className="container">
            <div className="process-heading">
              <p className="eyebrow dark">{content.process.eyebrow}</p>
              <h2>{content.process.headline}<br /><em>{content.process.emphasis}</em></h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow dark">{content.contact.eyebrow}</p>
              <h2>{content.contact.headline}<br /><em>{content.contact.emphasis}</em></h2>
              <a className="button button-dark" href={`mailto:${EMAIL}?subject=${encodeURIComponent(content.contact.emailSubject)}`}>{content.contact.estimate} <Arrow /></a>
            </div>
            <address>
              <div><small>{content.contact.phone}</small><a href={`tel:+1${PHONE.replaceAll("-", "")}`}>{PHONE}</a></div>
              <div><small>{content.contact.address}</small><span>Glen Cove, NY 11542</span></div>
              <div><small>{content.contact.instagram}</small><a href={INSTAGRAM} target="_blank" rel="noreferrer">@zpainting.corp</a></div>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo label={`Zaldivar Painting Corp - ${language === "en" ? "Home" : "Inicio"}`} />
          <p>© 2026 Zaldivar Painting Corp. {content.footer}</p>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

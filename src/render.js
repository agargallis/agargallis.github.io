import { site } from "./data/site";

const externalAttrs = 'target="_blank" rel="noreferrer"';

export const renderBackdrop = () => `
  <div class="backdrop" aria-hidden="true">
    <div class="orb orb-one"></div>
    <div class="orb orb-two"></div>
    <div class="orb orb-three"></div>
    <div class="grid-overlay"></div>
  </div>
`;

const renderSocials = (socials) =>
  socials
    .map(
      (social) => `
        <a class="social-link" href="${social.href}" ${externalAttrs} aria-label="${social.label}">
          <img src="${social.icon}" alt="" loading="lazy" />
        </a>
      `
    )
    .join("");

const renderTagline = (items) =>
  items
    .map(
      (item, index) => `
        <a class="tagline-link" href="${item.href}" ${externalAttrs}>
          ${item.text}
        </a>
        ${index < items.length - 1 ? '<span class="tagline-sep">&amp;</span>' : ""}
      `
    )
    .join("");

const renderProjects = (projects) =>
  projects
    .map(
      (project) => `
        <a class="card project-card" href="${project.href}" ${externalAttrs}>
          <div class="icon-shell">
            <img src="${project.icon}" alt="" loading="lazy" />
          </div>
          <h3>${project.title}</h3>
        </a>
      `
    )
    .join("");

const renderCertificationIcons = (icons) =>
  icons
    .map(
      (icon) => `
        <a class="icon-badge" href="${icon.href}" ${externalAttrs}>
          <img src="${icon.src}" alt="" loading="lazy" />
        </a>
      `
    )
    .join("");

const renderCertifications = (items) =>
  items
    .map(
      (item) => `
        <article class="card cert-card">
          <div>
            <h3>${item.title}</h3>
            <p class="cert-subtitle">${item.subtitle}</p>
            ${
              Array.isArray(item.description)
                ? `<ul class="cert-list">
                    ${item.description
                      .map((point) => `<li>${point}</li>`)
                      .join("")}
                  </ul>`
                : `<p class="cert-desc">${item.description}</p>`
            }
          </div>
          <div class="cert-actions">
            <a class="btn btn-ghost" href="${item.cta.href}" ${externalAttrs}>${item.cta.label}</a>
            <div class="icon-row">
              ${renderCertificationIcons(item.icons)}
            </div>
          </div>
        </article>
      `
    )
    .join("");

const renderLanguages = (items, logos) =>
  items
    .map((item, index) => {
      const logo = logos
        ? index === 0
          ? logos[1]
          : logos[0]
        : null;

      return `
        <div class="card language-card">
          <div class="language-header">
            <h3>${item.name}</h3>
            ${
              logo
                ? `
              <a class="language-icon" href="${logo.href}" ${externalAttrs}>
                <img src="${logo.src}" alt="" loading="lazy" />
              </a>
            `
                : ""
            }
          </div>
          <p>${item.level}</p>
        </div>
      `;
    })
    .join("");

const renderEducation = (items) =>
  items
    .map(
      (item) => `
        <article class="card education-card">
          <div class="education-head">
            <div>
              <h3>${item.school}</h3>
              <p class="education-period">${item.period}</p>
            </div>
            <a class="icon-badge" href="${item.icon.href}" ${externalAttrs}>
              <img src="${item.icon.src}" alt="" loading="lazy" />
            </a>
          </div>
          <h4>${item.program}</h4>
          <p>${item.description}</p>
          <a class="inline-link" href="${item.locationHref}" ${externalAttrs}>
            ${item.locationLabel}
          </a>
        </article>
      `
    )
    .join("");

export const renderHeader = () => `
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo" aria-label="${site.meta.description}">
        <img src="${site.header.logo}" alt="${site.meta.description}" />
      </div>
      <nav class="site-nav">
        <a class="nav-highlight" href="/">Home</a>
        <a class="nav-highlight" href="/resume/">Resume</a>
        <a class="nav-highlight" href="/contact/">Contact</a>
      </nav>
      <div class="header-socials">
        ${renderSocials(site.header.socials)}
      </div>
    </div>
  </header>
`;

export const renderHero = () => `
  <section class="hero section" id="home">
    <div class="container hero-grid">
      <div class="hero-content reveal">
        <h1>${site.hero.headline}</h1>
        <div class="tagline">${renderTagline(site.hero.tagline)}</div>
      </div>
      <div class="hero-media reveal">
        <div class="hero-card">
          <img src="${site.hero.image.src}" alt="${site.hero.image.alt}" />
        </div>
      </div>
    </div>
  </section>
`;

export const renderAboutSection = () => `
  <section class="section about" id="about">
    <div class="container">
      <div class="about-card reveal">
        <div class="about-copy">
          <p class="about-eyebrow">ANTONIOS GARGALLIS</p>
          <h2>${site.about.title}</h2>
          <p>${site.about.intro}</p>
        </div>
        <div class="about-highlights">
          ${site.about.highlights
            .map(
              (item) => `
              <div class="highlight">
                <span class="highlight-dot"></span>
                <span>${item}</span>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>
`;

export const renderProjectsSection = () => `
  <section class="section projects" id="projects">
    <div class="container">
      <div class="section-head reveal">
        <h2>${site.projects.title}</h2>
      </div>
      <div class="project-controls">
        <button class="project-nav" type="button" data-direction="prev" aria-label="Scroll projects left">
          ‹
        </button>
        <div class="project-track" aria-label="Projects list">
          <div class="grid project-grid">
            ${renderProjects(site.projects.items)}
          </div>
        </div>
        <button class="project-nav" type="button" data-direction="next" aria-label="Scroll projects right">
          ›
        </button>
      </div>
    </div>
  </section>
`;

export const renderCertificationsSection = () => `
  <section class="section section-alt" id="certifications">
    <div class="container">
      <div class="section-head reveal">
        <h2>${site.certifications.title}</h2>
      </div>
      <div class="cert-controls reveal">
        <button class="cert-nav" type="button" data-direction="prev" aria-label="Scroll certifications left">
          ‹
        </button>
        <div class="cert-track" aria-label="Certifications list">
          <div class="grid cert-grid">
            ${renderCertifications(site.certifications.items)}
          </div>
        </div>
        <button class="cert-nav" type="button" data-direction="next" aria-label="Scroll certifications right">
          ›
        </button>
      </div>
    </div>
  </section>
`;

export const renderLanguagesSection = () => `
  <section class="section" id="languages">
    <div class="container">
      <div class="section-head reveal">
        <div class="section-title">
          <h2>${site.languages.title}</h2>
        </div>
      </div>
      <div class="grid language-grid reveal">
        ${renderLanguages(site.languages.items, site.languages.logos)}
      </div>
      <div class="work-timeline reveal">
        <div class="work-line"></div>
        ${site.languages.work
          .map(
            (item) => `
            <article class="work-item">
              <div class="work-marker">
                <span class="work-dot"></span>
                <span class="work-pulse"></span>
              </div>
              <div class="work-card">
                <div class="work-card-content">
                  <div class="work-head">
                    <h3>${item.title}</h3>
                    <span class="work-period">${item.period}</span>
                  </div>
                  <p>${item.description}</p>
                </div>
                <a class="work-card-logo" href="${site.languages.workImage.href}" ${externalAttrs}>
                  <img src="${site.languages.workImage.src}" alt="${site.languages.workImage.alt}" loading="lazy" />
                </a>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

export const renderEducationSection = () => `
  <section class="section section-alt" id="education">
    <div class="container">
      <div class="section-head reveal">
        <h2>${site.education.title}</h2>
      </div>
      <div class="education-timeline reveal">
        <div class="timeline-line"></div>
        ${site.education.items
          .map(
            (item) => `
            <article class="timeline-item">
              <div class="timeline-marker">
                <span class="timeline-dot"></span>
                <span class="timeline-ring"></span>
              </div>
              <div class="timeline-card">
                <div class="education-head">
                  <div>
                    <h3>${item.school}</h3>
                    <p class="education-period">${item.period}</p>
                  </div>
                  <a class="icon-badge" href="${item.icon.href}" ${externalAttrs}>
                    <img src="${item.icon.src}" alt="" loading="lazy" />
                  </a>
                </div>
                <h4>${item.program}</h4>
                <p>${item.description}</p>
                <a class="inline-link" href="${item.locationHref}" ${externalAttrs}>
                  ${item.locationLabel}
                </a>
              </div>
            </article>
          `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

export const renderContactSection = () => `
  <section class="section" id="contact">
    <div class="container contact-grid">
      <div class="contact-card reveal">
        <h2>${site.contact.title}</h2>
        <p class="contact-subtitle">${site.contact.subtitle}</p>
        <div class="contact-item">
          <span class="contact-icon">
            <img src="${site.contact.phone.icon}" alt="" loading="lazy" />
          </span>
          <div>
            <p>${site.contact.phone.label}</p>
            <a href="${site.contact.phone.href}">${site.contact.phone.value}</a>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">
            <img src="${site.contact.email.icon}" alt="" loading="lazy" />
          </span>
          <div>
            <p>${site.contact.email.label}</p>
            <a href="${site.contact.email.href}">${site.contact.email.value}</a>
          </div>
        </div>
      </div>
      <div class="contact-media reveal" style="background-image: url('${site.contact.image}')"></div>
    </div>
  </section>
`;

export const renderContactLoop = () => `
  <section class="section contact-loop" id="contact-loop">
    <div class="container">
      <div class="contact-loop-track">
        <div class="contact-loop-row">
          <span class="loop-label">Phone</span>
          <a class="loop-value" href="${site.contact.phone.href}">${site.contact.phone.value}</a>
          <span class="loop-divider">•</span>
          <span class="loop-label">Email</span>
          <a class="loop-value" href="${site.contact.email.href}">${site.contact.email.value}</a>
          <span class="loop-divider">•</span>
          <span class="loop-label">Phone</span>
          <a class="loop-value" href="${site.contact.phone.href}">${site.contact.phone.value}</a>
          <span class="loop-divider">•</span>
          <span class="loop-label">Email</span>
          <a class="loop-value" href="${site.contact.email.href}">${site.contact.email.value}</a>
        </div>
      </div>
    </div>
  </section>
`;

export const renderFormSection = (options = {}) => {
  const className = options.className ?? "section section-alt";
  const styleAttr = options.withContactBackdrop
    ? ` style="--contact-bg: url('${site.contact.image}')"`
    : "";

  return `
  <section class="${className}" id="get-in-touch"${styleAttr}>
    <div class="container form-grid">
      <div class="form-card reveal">
        <h2>${site.form.title}</h2>
        <form action="#" data-action="${site.form.action}" method="POST" class="contact-form" onsubmit="return false">
          <label>
            ${site.form.fields.name.label}
            <input type="text" name="name" placeholder="${site.form.fields.name.placeholder}" required />
          </label>
          <label>
            ${site.form.fields.email.label}
            <input type="email" name="email" placeholder="${site.form.fields.email.placeholder}" required />
          </label>
          <label>
            ${site.form.fields.message.label}
            <textarea name="message" rows="4" placeholder="${site.form.fields.message.placeholder}" required></textarea>
          </label>
          <button class="btn" type="submit">${site.form.submitLabel}</button>
          <p class="form-message" aria-live="polite">${site.form.successMessage}</p>
          <p class="form-message form-error" aria-live="polite">${site.form.errorMessage}</p>
        </form>
      </div>
      <div class="form-illustration reveal">
        <img src="${site.form.illustration}" alt="" loading="lazy" />
      </div>
    </div>
  </section>
`;
};

export const renderFooter = () => {
  const year = new Date().getFullYear();
  const footerText = site.footer.text.replace(/\b\d{4}\b/, String(year));

  return `
  <footer class="site-footer">
    <div class="container">
      <a href="${site.footer.href}" class="footer-link">${footerText}</a>
    </div>
  </footer>
`;
};

export const initAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {
      heroCard.addEventListener("mousemove", (event) => {
        const rect = heroCard.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        heroCard.style.setProperty("--tilt-x", `${y * -8}deg`);
        heroCard.style.setProperty("--tilt-y", `${x * 10}deg`);
      });

      heroCard.addEventListener("mouseleave", () => {
        heroCard.style.setProperty("--tilt-x", "0deg");
        heroCard.style.setProperty("--tilt-y", "0deg");
      });
    }
  }

  const projectControls = document.querySelectorAll(".project-controls");

  projectControls.forEach((controls) => {
    const track = controls.querySelector(".project-track");
    const buttons = controls.querySelectorAll(".project-nav");

    if (!track || buttons.length === 0) {
      return;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.direction === "prev" ? -1 : 1;
        const amount = Math.max(track.clientWidth * 0.7, 240);
        track.scrollBy({ left: amount * direction, behavior: "smooth" });
      });
    });
  });

  const certControls = document.querySelectorAll(".cert-controls");

  certControls.forEach((controls) => {
    const track = controls.querySelector(".cert-track");
    const buttons = controls.querySelectorAll(".cert-nav");

    if (!track || buttons.length === 0) {
      return;
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.direction === "prev" ? -1 : 1;
        const amount = Math.max(track.clientWidth * 0.7, 260);
        track.scrollBy({ left: amount * direction, behavior: "smooth" });
      });
    });
  });

  const submitContactForm = async (form) => {
    const successMessage = form.querySelector(".form-message:not(.form-error)");
    const errorMessage = form.querySelector(".form-message.form-error");
    const submitButton = form.querySelector('button[type="submit"]');

    if (!successMessage || !errorMessage) {
      return;
    }

    const resetMessages = () => {
      successMessage.classList.remove("is-visible");
      errorMessage.classList.remove("is-visible");
    };

    resetMessages();

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
    }

    try {
      const action = form.dataset.action || form.action;
      const response = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        successMessage.classList.add("is-visible");
        form.reset();
      } else {
        errorMessage.classList.add("is-visible");
      }
    } catch (error) {
      errorMessage.classList.add("is-visible");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute("aria-busy");
      }
    }
  };

  if (!document.body.dataset.formHandler) {
    document.body.dataset.formHandler = "true";
    document.addEventListener(
      "submit",
      (event) => {
        const form = event.target.closest(".contact-form");
        if (!form) {
          return;
        }
        event.preventDefault();
        submitContactForm(form);
      },
      true
    );
  }
};

import "./styles.css";
import {
  renderBackdrop,
  renderHeader,
  renderHero,
  renderAboutSection,
  renderContactLoop,
  renderFormSection,
  renderProjectsSection,
  renderCertificationsSection,
  renderLanguagesSection,
  renderEducationSection,
  renderFooter,
  initAnimations,
} from "./render";

const app = document.querySelector("#app");

const routeConfig = {
  "/": {
    title: "Antonis Gargallis",
    renderMain: () => `
      ${renderHero()}
      ${renderAboutSection()}
    `,
    canonical: "/",
  },
  "/contact": {
    title: "Contact",
    renderMain: () => `
      ${renderContactLoop()}
      ${renderFormSection({ className: "section" })}
    `,
    canonical: "/contact/",
  },
  "/resume": {
    title: "Resume",
    renderMain: () => `
      ${renderEducationSection()}
      ${renderLanguagesSection()}
      ${renderCertificationsSection()}
      ${renderProjectsSection()}
    `,
    canonical: "/resume/",
  },
};

const normalizePath = (pathname) => pathname.replace(/\/+$/, "") || "/";

const getRoute = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  return routeConfig[normalizedPath] || routeConfig["/"];
};

const setCanonical = (canonicalPath) => {
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", canonicalPath);
  }
};

const renderRoute = (pathname) => {
  const route = getRoute(pathname);

  document.title = route.title;
  setCanonical(route.canonical);

  app.innerHTML = `
    ${renderBackdrop()}
    ${renderHeader()}
    <main>
      ${route.renderMain()}
    </main>
    ${renderFooter()}
  `;

  initAnimations();
};

const navigateTo = (url, replace = false) => {
  if (replace) {
    window.history.replaceState({}, "", url);
  } else {
    window.history.pushState({}, "", url);
  }

  renderRoute(window.location.pathname);
};

const shouldHandleAsInternalRoute = (url) => {
  const normalizedPath = normalizePath(url.pathname);
  return Object.prototype.hasOwnProperty.call(routeConfig, normalizedPath);
};

const bindRouter = () => {
  if (document.body.dataset.routerBound) {
    return;
  }

  document.body.dataset.routerBound = "true";

  document.addEventListener(
    "click",
    (event) => {
      const anchor = event.target.closest("a[href]");

      if (!anchor) {
        return;
      }

      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = anchor.getAttribute("target");
      if (target && target !== "_self") {
        return;
      }

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) {
        return;
      }

      if (!shouldHandleAsInternalRoute(url)) {
        return;
      }

      if (normalizePath(url.pathname) === normalizePath(window.location.pathname)) {
        return;
      }

      event.preventDefault();
      navigateTo(`${url.pathname}${url.search}${url.hash}`);
    },
    true
  );

  window.addEventListener("popstate", () => {
    renderRoute(window.location.pathname);
  });
};

bindRouter();
renderRoute(window.location.pathname);

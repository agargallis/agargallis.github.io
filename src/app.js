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
  renderLegalPage,
  renderFooter,
  initAnimations,
} from "./render";
import { site } from "./data/site";

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

const getLegalPage = (pageKey) =>
  site.legal.links.find((link) => link.key === pageKey);

const getLegalPageKeyFromUrl = (url) => {
  const normalizedPath = normalizePath(url.pathname);
  const legalLink = site.legal.links.find(
    (link) => normalizePath(link.href) === normalizedPath
  );

  return legalLink ? legalLink.key : "";
};

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

const renderRoute = (pathname, options = {}) => {
  const route = getRoute(pathname);
  const legalPage = getLegalPage(options.legalPageKey || "");

  document.title = legalPage ? legalPage.title : route.title;
  setCanonical(legalPage ? legalPage.canonical : route.canonical);

  app.innerHTML = `
    ${renderBackdrop()}
    ${renderHeader()}
    <main>
      ${legalPage ? renderLegalPage(legalPage.key) : route.renderMain()}
    </main>
    ${renderFooter()}
  `;

  initAnimations();
};

const navigateTo = (url, replace = false, state = {}) => {
  if (replace) {
    window.history.replaceState(state, "", url);
  } else {
    window.history.pushState(state, "", url);
  }

  renderRoute(window.location.pathname, state);
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

      const legalPageKey =
        anchor.dataset.legalKey || getLegalPageKeyFromUrl(url);
      if (legalPageKey) {
        event.preventDefault();
        navigateTo(
          `${window.location.pathname}${window.location.search}${window.location.hash}`,
          false,
          { legalPageKey }
        );
        return;
      }

      if (!shouldHandleAsInternalRoute(url)) {
        return;
      }

      const isSamePath =
        normalizePath(url.pathname) === normalizePath(window.location.pathname);

      if (isSamePath) {
        const hasDifferentQueryOrHash =
          url.search !== window.location.search || url.hash !== window.location.hash;
        const hasActiveLegalState = Boolean(
          window.history.state && window.history.state.legalPageKey
        );

        if (hasDifferentQueryOrHash || hasActiveLegalState) {
          event.preventDefault();
          navigateTo(`${url.pathname}${url.search}${url.hash}`, true, {});
        }

        return;
      }

      event.preventDefault();
      navigateTo(`${url.pathname}${url.search}${url.hash}`, false, {});
    },
    true
  );

  window.addEventListener("popstate", (event) => {
    renderRoute(window.location.pathname, event.state || {});
  });
};

bindRouter();
renderRoute(window.location.pathname, window.history.state || {});

import "../styles.css";
import { site } from "../data/site";
import {
  renderBackdrop,
  renderHeader,
  renderLegalPage,
  renderFooter,
  initAnimations,
} from "../render";

const getLegalPage = (pageKey) =>
  site.legal.links.find((link) => link.key === pageKey);

const normalizePath = (pathname) => pathname.replace(/\/+$/, "") || "/";

const getLegalKeyFromAnchor = (anchor) => {
  const explicitKey = anchor.dataset.legalKey;
  if (explicitKey) {
    return explicitKey;
  }

  const url = new URL(anchor.href, window.location.origin);
  const normalizedPath = normalizePath(url.pathname);
  const link = site.legal.links.find(
    (item) => normalizePath(item.href) === normalizedPath
  );

  return link ? link.key : "";
};

const applyLegalMeta = (pageKey) => {
  const page = getLegalPage(pageKey);

  if (!page) {
    return;
  }

  document.title = page.title;

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", page.canonical);
  }
};

const bindLegalTabSwitch = () => {
  if (document.body.dataset.legalTabsBound) {
    return;
  }

  document.body.dataset.legalTabsBound = "true";

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a.legal-link[href]");

    if (!link) {
      return;
    }

    const url = new URL(link.href, window.location.origin);
    if (url.origin !== window.location.origin) {
      return;
    }

    const nextPageKey = getLegalKeyFromAnchor(link);
    if (!nextPageKey) {
      return;
    }

    event.preventDefault();

    const main = document.querySelector("main");
    if (!main) {
      return;
    }

    main.innerHTML = renderLegalPage(nextPageKey);
    applyLegalMeta(nextPageKey);
    initAnimations();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
};

export const mountLegalPage = (pageKey) => {
  const app = document.querySelector("#app");

  app.innerHTML = `
    ${renderBackdrop()}
    ${renderHeader()}
    <main>
      ${renderLegalPage(pageKey)}
    </main>
    ${renderFooter()}
  `;

  applyLegalMeta(pageKey);
  bindLegalTabSwitch();
  initAnimations();
};

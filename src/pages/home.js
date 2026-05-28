import "../styles.css";
import {
  renderBackdrop,
  renderHeader,
  renderHero,
  renderAboutSection,
  renderFooter,
  renderBackToTopButton,
  initNavigationTitleHints,
  initIntroLoader,
  initAnimations,
} from "../render";

const app = document.querySelector("#app");

app.innerHTML = `
  ${renderBackdrop()}
  ${renderHeader()}
  <main>
    ${renderHero()}
    ${renderAboutSection()}
  </main>
  ${renderFooter()}
  ${renderBackToTopButton()}
`;

initNavigationTitleHints();
initAnimations();
initIntroLoader();

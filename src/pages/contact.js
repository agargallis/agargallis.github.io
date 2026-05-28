import "../styles.css";
import {
  renderBackdrop,
  renderHeader,
  renderContactLoop,
  renderFormSection,
  renderFooter,
  renderBackToTopButton,
  initNavigationTitleHints,
  initAnimations,
} from "../render";

const app = document.querySelector("#app");

app.innerHTML = `
  ${renderBackdrop()}
  ${renderHeader()}
  <main>
    ${renderContactLoop()}
    ${renderFormSection({
      className: "section",
    })}
  </main>
  ${renderFooter()}
  ${renderBackToTopButton()}
`;

initNavigationTitleHints();
initAnimations();

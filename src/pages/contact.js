import "../styles.css";
import {
  renderBackdrop,
  renderHeader,
  renderContactLoop,
  renderFormSection,
  renderFooter,
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
`;

initNavigationTitleHints();
initAnimations();

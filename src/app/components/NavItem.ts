import { LitElement, html, CSSResult } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import styles from "./NavItem.litscss";

@customElement("a-nav-item")
export class ANavItem extends LitElement {
  public static get styles(): CSSResult {
    return styles as CSSResult;
  }

  render() {
    return html`
      <div class="icon">
        <slot name="icon"></slot>
      </div>
      <div class="label">
        <slot name="label"></slot>
      </div>
    `;
  }
}

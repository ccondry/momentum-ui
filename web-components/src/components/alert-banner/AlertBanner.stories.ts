/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 import { withA11y } from "@storybook/addon-a11y";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { html } from "lit-html";
import { action } from '@storybook/addon-actions';
import "@/components/icon/Icon";
import "@/components/alert-banner/AlertBanner";
import "@/components/theme/Theme";

export default {
  title: "Components/Alert Banner",
  component: "md-alert-banner",
  decorators: [withKnobs, withA11y],
  parameters: {
    a11y: {
      element: "md-alert-banner"
    },
    docs: { 
      description: { 
        component: 'A typical usage of Alert Banner, with text added within the element tags or message attribute' 
      },
    }
  }
};

export const AlertBanner = () => {
  const darkTheme = boolean("darkMode", false);
  const lumos = boolean("Lumos Theme", false);
  const type = select("type", ["default", "warning", "error"], "default");
  const closable = boolean("closable", false);
  const textContent = text("alert message", "Test Alert Message");

  return html`
    <md-theme class="theme-toggle" id="alert-banner" ?darkTheme=${darkTheme} ?lumos=${lumos}>
      <md-alert-banner @alertBanner-hide=${(action('dispatchEvent'))} show type="${type}" ?closable=${closable} message="${textContent}">
        ${textContent ? `${textContent}` : `Text with slotted tag element`}
      </md-alert-banner>
    </md-theme>
  `;
};


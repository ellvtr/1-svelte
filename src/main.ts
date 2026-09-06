/**
 * Client Application Bootstrap Entry Point.
 * What: Locates root DOM container and mounts Svelte 5 root application instance.
 * When: Executed immediately on client page load by index.html script tag.
 * Why: Initializes Svelte 5 fine-grained runtime and exports mounted app instance.
 */

import { mount } from "svelte";
import "prismjs/themes/prism-tomorrow.css";
import App from "./App.svelte";

// Locate mounting DOM container
const appElement = document.getElementById("app");

// Fail fast if root element is missing from index.html
if (!appElement) {
  throw new Error("Could not find root element #app in DOM.");
}

// Mount Svelte 5 App component to root target
const app = mount(App, {
  target: appElement,
});

export default app;

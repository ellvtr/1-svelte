import { mount } from "svelte";
import App from "./App.svelte";

const appElement = document.getElementById("app");

if (!appElement) {
  throw new Error("Could not find root element #app in DOM.");
}

const app = mount(App, {
  target: appElement,
});

export default app;

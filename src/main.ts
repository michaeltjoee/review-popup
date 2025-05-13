import { mount } from "svelte";
import "./styles/fonts.css";
import "./styles/variables.css";
import "./styles/common.css";
import "./app.css";
import "./i18n";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;

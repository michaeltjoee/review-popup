import { init, addMessages } from "svelte-i18n";

import en from "./locales/en.json";
import id from "./locales/id.json";

addMessages("en", en);
addMessages("id", id);

const htmlLang = document.documentElement.lang || "en";

init({ fallbackLocale: "en", initialLocale: htmlLang });

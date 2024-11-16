import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js"
export default defineUserConfig({
    bundler: viteBundler(),
    theme,
    locales: {
        "/": {
            lang: "en-US",
            title: "Timeless and Classics guns Wiki",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "永恒枪械工坊",
        },
    },
});

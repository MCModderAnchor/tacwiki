import { hopeTheme } from "vuepress-theme-hope";

import { enusNavbar, zhcnNavbar } from "./sidebar";

export default hopeTheme({
    plugins: {
        searchPro: {
            indexContent: false,
            autoSuggestions: false,
            queryHistoryCount: 0,
            resultHistoryCount: 0,
        },
        mdEnhance: {
            katex: true,
            figure: true,
        },
    },
    repo: "https://github.com/MCModderAnchor/tacwiki",
    repoLabel: "GitHub",
    repoDisplay: true,
    docsDir: "docs",
    lastUpdated: true,
    contributors: true,
    locales: {
        "/": {
            sidebar: enusNavbar,
        },
        "/zh/": {
            sidebar: zhcnNavbar,
        },
    },
});

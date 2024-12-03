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
        notice: [
            {
                path: "/zh/",
                title: "Wiki 翻修中...",
                content: "新版Wiki仍在建设中，部分内容可能不完整或有错误，如果你希望查看旧版的Wiki，请点击下面的按钮。",
                actions: [
                    {
                        text: "查看旧版Wiki",
                        link: "/zh/gunpack/legacy/before_start/",
                        type: "primary",
                    }
                ],
            },
        ],
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

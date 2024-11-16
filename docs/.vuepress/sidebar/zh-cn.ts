import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
        text: "模组使用文档",
        link: "/zh/user_guide/welcome",
        prefix: "/zh/user_guide/",
        collapsible: true,
        children: "structure"
    },
    {
        text: "枪包制作指南",
        link: "/zh/gunpack/01_before_start",
        prefix: "/zh/gunpack/",
        children: "structure",
    },
    {
        text: "模型建造指南",
        link: "/zh/model_guide/",
        prefix: "/zh/model_guide/",
        children: "structure",
    },
]);

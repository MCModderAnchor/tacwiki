import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
        text: "模组使用文档",
        link: "/zh-cn/user_guide/welcome",
        prefix: "/zh-cn/user_guide/",
        children: "structure"
    },
    {
        text: "枪包说明文档",
        link: "/zh-cn/gunpack/before_start/",
        prefix: "/zh-cn/gunpack/",
        children: "structure",
    },
    {
        text: "模型建造指南",
        link: "/zh-cn/model_guide/",
        prefix: "/zh-cn/model_guide/",
        children: "structure",
    },
]);

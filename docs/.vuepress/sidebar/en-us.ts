import { sidebar } from "vuepress-theme-hope";

export default sidebar([
    {
        text: "Gunpack Building Guide",
        link: "/gunpack/",
        collapsible: true,
        children: [
            "/gunpack/first_gunpack/",
            "/gunpack/language/",
            "/gunpack/first_gun/",
            "/gunpack/gun_positioning/",
            "/gunpack/hud_icon/",
            "/gunpack/gun_sound/",
            "/gunpack/gun_extra_damage/",
            "/gunpack/ammo/",
            "/gunpack/shell_ejection/",
            "/gunpack/muzzle_flash/",
            "/gunpack/render_text/",
            "/gunpack/hand_pos/",
            "/gunpack/animation/",
            "/gunpack/ica/",
            "/gunpack/bolt_type/",
            "/gunpack/attachment/",
            "/gunpack/gun_refit/",
            "/gunpack/lod/",
            "/gunpack/recipe/",
        ],
    },
    {
        text: "Model Building Guide",
        link: "/model_guide/",
        collapsible: true,
        children: [
            "/model_guide/setting/",
            "/model_guide/model/",
            "/model_guide/texture/",
        ],
    },
]);

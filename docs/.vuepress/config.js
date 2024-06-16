import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    bundler: viteBundler(),
    theme: hopeTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
                sidebar: [
                    '/'
                ]
            },
            '/zh/': {
                selectLanguageName: '简体中文',
                sidebar: [
                    {
                        text: '枪包说明文档',
                        link: '/zh/gunpack/',
                        children: [
                            '/zh/gunpack/first_gunpack/',
                            '/zh/gunpack/language/',
                            '/zh/gunpack/first_gun/',
                            '/zh/gunpack/gun_positioning/',
                            '/zh/gunpack/hud_icon/',
                            '/zh/gunpack/gun_sound/',
                            '/zh/gunpack/gun_extra_damage/',
                            '/zh/gunpack/ammo/',
                            '/zh/gunpack/shell_ejection/',
                            '/zh/gunpack/muzzle_flash/',
                            '/zh/gunpack/hand_pos/',
                            '/zh/gunpack/animation/',
                            '/zh/gunpack/ica/',
                            '/zh/gunpack/bolt_type/',
                            '/zh/gunpack/attachment/',
                            '/zh/gunpack/gun_refit/',
                            '/zh/gunpack/lod/',
                            '/zh/gunpack/recipe/'
                        ]
                    },
                    {
                        text: '模型建造指南',
                        link: '/zh/model_guide/',
                        children: [
                            '/zh/model_guide/setting/',
                            '/zh/model_guide/model/',
                            '/zh/model_guide/texture/'
                        ]
                    }
                ]
            }
        }
    }),
    plugins: [
    ]
})

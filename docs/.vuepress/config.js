import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    bundler: viteBundler({
        locales: {
            '/': {
                sidebar: [
                    '/'
                ]
            },
            '/zh/': {
                sidebar: [
                    '/zh/',
                    {
                        title: '枪包说明文档',
                        path: '/zh/gunpack/',
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
                        title: '模型建造指南',
                        path: '/zh/model_guide/',
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
    theme: hopeTheme(),
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Timeless and Classics guns Wiki',
            description: 'A wiki related to Minecraft mod: Timeless and Classics guns'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '永恒枪械工坊',
            description: '永恒枪械工坊帮助文档'
        }
    },
    plugins: [
    ]
})

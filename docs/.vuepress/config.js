module.exports = {
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
    themeConfig: {
        locales: {
            '/': {
                sidebar: [
                    '/',
                    {
                        title: 'Gunpack Building Guide',
                        path: '/gunpack/',
                        children: [
                            '/gunpack/first_gunpack/',
                            '/gunpack/language/',
                            '/gunpack/first_gun/',
                            '/gunpack/gun_positioning/',
                            '/gunpack/hud_icon/',
                            '/gunpack/gun_sound/',
                            '/gunpack/gun_extra_damage/',
                            '/gunpack/ammo/',
                            '/gunpack/shell_ejection/',
                            '/gunpack/muzzle_flash/',
                            '/gunpack/hand_pos/',
                            '/gunpack/animation/',
                            '/gunpack/ica/',
                            '/gunpack/bolt_type/',
                            '/gunpack/attachment/',
                            '/gunpack/gun_refit/',
                            '/gunpack/lod/',
                            '/gunpack/recipe/',
                            '/gunpack/tag/'
                        ]
                    },
                    {
                        title: 'Model Building Guide',
                        path: '/model_guide/',
                        children: [
                            '/model_guide/setting/',
                            '/model_guide/model/',
                            '/model_guide/texture/'
                        ]
                    }
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
                            '/zh/gunpack/recipe/',
                            '/zh/gunpack/tag/'
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
        },
    }
}

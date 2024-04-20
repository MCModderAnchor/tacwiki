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
                            '/zh/gunpack/gun_positioning/',
                            '/zh/gunpack/hud_icon/',
                            '/zh/gunpack/gun_sound/',
                            '/zh/gunpack/gun_extra_damage/',
                            '/zh/gunpack/gun_refit/',
                            '/zh/gunpack/shell_ejection/',
                            '/zh/gunpack/muzzle_flash/',
                            '/zh/gunpack/lod/',
                            '/zh/gunpack/animation/',
                            '/zh/gunpack/ica/',
                            '/zh/gunpack/bolt_type/'
                        ]
                    },
                    {
                        title: '模型说明文档',
                        path: '/zh/model/'
                    }
                ]
            }
        },
    }
}

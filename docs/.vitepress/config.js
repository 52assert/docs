export default {
    // title: '测试站点', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要

    themeConfig: {
        algolia: {
            appId: 'G8HARRPHZM', // 需要替换
            apiKey: '44f318a0d71b8df2b9911dd1f58b7b9a', // 需要替换
            indexName: 'dowaydoc', // 需要替换
            placeholder: '请输入关键词',
            buttonText: '搜索',
        },
        siteTitle: "测试站点",
        logo: "/logo.png",
        sidebar: {
            "/articles/": [
                {
                    text: "ERP文档",
                    items: [
                        {text: "销售订单相关", link: "/articles/test",},
                        {text: "采购订单相关", link: "/articles/gulp的使用"},
                    ],
                },
                {
                    text: "vue教程",
                    items: [
                        {
                            text: "pina和vuex",
                            link: "/articles/pina和vuex",
                        },
                    ],
                },
            ]
        },
        nav: [
            {text: "文档", link: "/articles/test"},
            {text: "Test", link: "/test"},
            {text: "gitee", link: "https://gitee.com/geeksdidi"},
            {
                text: "Drop Menu",
                items: [
                    {
                        items: [
                            {text: "Item A1", link: "/item-A1"},
                            {text: "Item A2", link: "/item-A2"},
                        ],
                    },
                    {
                        items: [
                            {text: "Item B1", link: "/item-B1"},
                            {text: "Item B2", link: "/item-B2"},
                        ],
                    },
                ]
            }
        ],
    }
}
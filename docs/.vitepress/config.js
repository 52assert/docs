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
        siteTitle: "多维知识库",
        logo: "/logo.svg",
        // 侧边栏
        sidebar: {
            "/articles/": [
                {
                    text: "SLS文档",
                    //可折叠配置 默认展开 true不展开
                    collapsed: false,
                    items: [
                        {text: "功能介绍", link: "/articles/sls/features",},
                        {text: "FAQ", link: "/articles/sls/faq"},
                    ],
                },
                {
                    text: "ERP文档",
                    collapsed: true,
                    items: [
                        // {text: "销售订单相关", link: "/articles/test",},
                        // {text: "采购订单相关", link: "/articles/gulp的使用"},
                    ],
                },
                {
                    text: "WMS文档",
                    collapsed: true,
                    items: [
                        {text: "pina和vuex", link: "/articles/pina和vuex",},
                    ],
                },
            ]
        },
        // 导航
        nav: [
            {text: "指南", link: "/articles/sls/faq"},
            {text: "Test", link: "/test"},
            {text: "gitee", link: "https://vitepress.vuejs.org/"},
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
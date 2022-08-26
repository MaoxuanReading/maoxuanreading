const sidebar = require('./sidebar.json')
module.exports = {
    title: "毛泽东选集",
    description: "伟大领袖毛主席的著作",
    themeConfig: {
        base: '/',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '正文', link: '/001-第一卷 国内革命战争时期/' }],
        sidebar: {
            "/": sidebar
        },
        repo: 'MaoxuanReading/maoxuanreading.github.io',
        repoLabel: '源码',
        docsRepo: 'https://github.com/MaoxuanReading/maoxuanreading.github.io',
        docsBranch: 'master',
    }
}
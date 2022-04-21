const private = require("./private/private")
const audios = require("./audios")

// 把最后更改时间更改为 中国地区的样式
const moment = require("moment");
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  head: [
    ["link", { rel: "icon", href: "/images/fav.svg" }]
  ],
  title: "双击空格",
  description: "相遇然后分别就在一天",
  // base: "/vueblog/",
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/fav.svg",
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: "分类" // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: "标签"      // 默认文案 “标签”
      }
    },
    subSidebar: "auto",//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "双击空格",
    authorAvatar: "/images/profile.jpg",
    mode: "dark", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default "tomorrow" okaidia
    record: "京ICP备2022005438号",
    recordLink: "https://icp.chinaz.com/home/info?host=aixshi.top",
    smooth: "true", //平滑滚动
    // 评论设置 
    valineConfig: {
      appId: private.appId,
      appKey: private.appKey,
      recordIP: true,
      placeholder: "填写邮箱地址可以及时收到回复噢...",
      visitor: true,
    },
    lastUpdated: "最后更新于",
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://www.uupoop.com/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.jetbrains.com/zh-cn/lp/devecosystem-2021/javascript/" },
        ]
      },
      {
        text: "项目",
        icon: "iconfont icon-tools",
        items: [
          { text: "Vue网易云音乐", link: "https://music.qier222.com/", icon: "iconfont icon-wangyiyunyinle" },
          { text: "Vue可编辑大屏系统", link: "http://aixshi.top/edit", icon: "iconfont icon-vue" },
          { text: "电商后台管理系统", link: "https://gitee.com/doubleblank/vue-admin", icon: "iconfont icon-vue" },
          { text: "WebSocket微信聊天", link: "https://github.com/Double-Blank/vue-we-chat", icon: "reco-wechat" },
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简历",
            link: "/views/About/resume",
            icon: "reco-document"
          },
          
          {
            text: "CSDN",
            link: "https://blog.csdn.net/weixin_42815873",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/Double-Blank",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/feng-mingzhe",
            icon: "reco-mayun",
          },
        ]
      }
    ],
  },
  // 项目开始时间
  // startYear: "2022",
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页 ！",
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    "reading-progress": false,

    // 分享插件: "vuepress-plugin-social-share": "^1.0.0"

    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format("LLLL")
      }
    },
    // BGM播放器 "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
    "@vuepress-reco/vuepress-plugin-bgm-player": {
      audios: audios,
    },
    // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
    "@vuepress-reco/vuepress-plugin-kan-ban-niang":
    {
      theme: ["wanko"],
      clean: true,
      width: 150,
      height: 219,
    },
    // 点击爆炸的彩带效果
    "cursor-effects": {
      size: 3,                    // size of the particle, default: 2
      shape: ["circle"],  // shape of the particle, default: "star"
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    },
  }
}

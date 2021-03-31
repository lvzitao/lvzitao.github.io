"use strict";

var vue = new Vue({
    el: '#menuList',
    data: {
        items: [
            {
                message: '中文新闻',
                folders: [
                    {
                        message: 'myzaker 聚合',
                        url: 'http://www.myzaker.com/channel/13'
                    },
                    {
                        message: '百度新闻',
                        url: 'https://new.qq.com/ch/tech/'
                    },
                    {
                        message: '腾讯新闻',
                        url: 'https://new.qq.com/'
                    },
                    {
                        message: '纽约时报中文网站',
                        url: 'https://cn.nytimes.com/'
                    },
                    {
                        message: '新浪新闻',
                        url: 'https://tech.sina.com.cn/'
                    },
                    {
                        message: '钛媒体',
                        url: 'https://www.tmtpost.com/'
                    },
                    {
                        message: 'tophub',
                        url: 'https://tophub.today/'
                    },
                    {
                        message: '观察',
                        url: 'https://www.guancha.cn/gongye%C2%B7keji?s=dhgongye%C2%B7keji'
                    },
                    {
                        message: '新浪',
                        url: 'https://www.sina.com.cn/'
                    },
                    {
                        message: '搜狐',
                        url: 'https://it.sohu.com/?spm=smpc.home.top-nav.22.1617119265873c7TKrpA'
                    },
                    {
                        message: 'ign中国',
                        url: 'https://www.ign.com.cn/'
                    },
                    {
                        message: 'udn',
                        url: 'https://udn.com/'
                    },
                    {
                        message: '澎湃新闻',
                        url: 'https://www.thepaper.cn/'
                    },
                    {
                        message: '中国经济网',
                        url: 'http://www.ce.cn/'
                    },
                    {
                        message: '读者',
                        url: 'https://www.duzhe.com/#/'
                    },
                    {
                        message: '环球人物',
                        url: 'http://www.globalpeople.com.cn/'
                    },
                    {
                        message: '国家人文历史',
                        url: 'http://www.gjrwls.com/'
                    },
                    {
                        message: '中国新闻周刊',
                        url: 'http://www.inewsweek.cn/'
                    },
                    {
                        message: '中国新闻网',
                        url: 'https://www.chinanews.com/'
                    },
                    {
                        message: '太原新闻网',
                        url: 'http://www.tynews.com.cn/'
                    },
                    {
                        message: 'BBC中文（英国广播公司）',
                        url: 'https://www.bbc.com/zhongwen/simp'
                    },
                    {
                        message: 'mobile01',
                        url: 'https://www.mobile01.com/'
                    },
                    {
                        message: '果壳 👍',
                        url: 'https://www.guokr.com/'
                    },
                    {
                        message: '快资讯',
                        url: 'https://www.360kuai.com/'
                    },
                    {
                        message: '今日头条',
                        url: 'https://www.toutiao.com/ch/news_tech/'
                    },
                    {
                        message: '虎扑',
                        url: 'https://www.hupu.com/'
                    },
                    {
                        message: '推酷',
                        url: 'https://www.tuicool.com/mags/tech'
                    },
                    {
                        message: '哈佛商业评论',
                        url: 'https://www.hbrchina.org/'
                    },
                    {
                        message: '彭博商业周刊中文版',
                        url: 'http://www.bbwc.cn/'
                    },
                    {
                        message: '华尔街见闻',
                        url: 'https://wallstreetcn.com/'
                    },
                    {
                        message: '虎嗅网',
                        url: 'https://www.huxiu.com/'
                    },
                    {
                        message: 'IT之家',
                        url: 'https://www.ithome.com/'
                    },
                    {
                        message: '爱范儿 ifanr',
                        url: 'https://www.ifanr.com/'
                    },
                    {
                        message: 'gamereactor',
                        url: 'https://www.gamereactor.cn/'
                    },
                    {
                        message: '汽车之家',
                        url: 'https://www.autohome.com.cn/beijing/'
                    },
                    {
                        message: '上市公司',
                        url: 'https://company.cnstock.com/'
                    },
                    {
                        message: '全现在',
                        url: 'https://www.allnow.com/'
                    },
                    {
                        message: '环球网',
                        url: 'https://www.huanqiu.com/'
                    },
                    {
                        message: '天涯社区',
                        url: 'https://bbs.tianya.cn/'
                    },
                    {
                        message: '36氪',
                        url: 'https://36kr.com/'
                    },
                    {
                        message: '链滴',
                        url: 'https://ld246.com/'
                    },
                    {
                        message: '网易新闻',
                        url: 'https://news.163.com/'
                    },
                    {
                        message: '泰伯网',
                        url: 'http://www.taibo.cn/'
                    },
                    {
                        message: 'historydaily',
                        url: 'https://historydaily.org/'
                    },

                ]
            },
            {
                message: '英文新闻',
                folders: [
                    {
                        message: '社交',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'twitter',
                                url: 'https://twitter.com/home'
                            },
                            {
                                message: 'facebook',
                                url: 'https://www.facebook.com/'
                            },
                            {
                                message: 'twitch',
                                url: 'https://www.twitch.tv/'
                            },
                            {
                                message: 'youtube',
                                url: 'https://www.youtube.com/'
                            },
                            {
                                message: 'instagram',
                                url: 'https://www.instagram.com/'
                            },
                        ]
                    },
                    {
                        message: '科技',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'sciencefocus',
                                url: 'https://www.sciencefocus.com/'
                            },
                            {
                                message: '聚合 flipboard 👍',
                                url: 'https://flipboard.com/'
                            },
                            {
                                message: '连线 wired',
                                url: 'https://www.wired.com/category/science/'
                            },
                            {
                                message: '科技探索 techxplore 💤',
                                url: 'https://techxplore.com/'
                            },
                            {
                                message: 'theverge',
                                url: 'https://www.theverge.com/'
                            },
                            {
                                message: 'mymodernmet',
                                url: 'https://mymodernmet.com/category/technology/'
                            },
                        ]
                    },
                    {
                        message: 'nature 👍',
                        url: 'https://www.nature.com/latest-news'
                    },
                    {
                        message: 'techradar',
                        url: 'https://www.techradar.com/'
                    },
                    {
                        message: '英国广播公司 bbc',
                        url: 'https://www.bbc.com/'
                    },
                    {
                        message: '路透社 reuters',
                        url: 'https://www.reuters.com/'
                    },
                    {
                        message: '显卡 videocardz',
                        url: 'https://videocardz.com/'
                    },
                    {
                        message: 'theregister',
                        url: 'https://www.theregister.com/'
                    },
                    {
                        message: 'siberiantimes 💤',
                        url: 'https://siberiantimes.com/home/'
                    },
                    {
                        message: 'google news',
                        url: 'https://news.google.com/'
                    },
                    {
                        message: '纽约时报 nytimes',
                        url: 'https://www.nytimes.com/'
                    },
                    {
                        message: '今日美国 suatoday',
                        url: 'https://www.usatoday.com/'
                    },
                    {
                        message: '美国有线电视新闻网 cnn',
                        url: 'https://edition.cnn.com/'
                    },
                    {
                        message: '国家地理 nationalgeographic',
                        url: 'https://www.nationalgeographic.com/'
                    },
                    {
                        message: '美联社 ap',
                        url: 'https://apnews.com/'
                    },
                    {
                        message: '美国读者文摘 rd 💤',
                        url: 'https://www.rd.com/'
                    },
                    {
                        message: '华盛顿新闻报 newsday 💤',
                        url: 'https://www.newsday.com/'
                    },
                    {
                        message: '纽约每日新闻 nydailynews 💤',
                        url: 'https://www.nydailynews.com/'
                    },
                    {
                        message: '十七岁 seventeen',
                        url: 'https://www.seventeen.com/'
                    },
                    {
                        message: '彭博社 bloomberg',
                        url: 'https://www.bloomberg.com/asia'
                    },
                    {
                        message: '澳大利亚广播公司 abc',
                        url: 'https://www.abc.net.au/news/'
                    },
                    {
                        message: 'buzzfeed 💤',
                        url: 'https://www.buzzfeed.com/'
                    },
                    {
                        message: 'interconnected',
                        url: 'https://interconnected.blog/'
                    },
                    {
                        message: 'leung-btc medium',
                        url: 'https://leung-btc.medium.com/'
                    },
                    {
                        message: 'cjr',
                        url: 'https://www.cjr.org/'
                    },
                    {
                        message: 'medium',
                        url: 'https://medium.com/'
                    },
                    {
                        message: '华尔街日报 wsj',
                        url: 'https://www.wsj.com/'
                    },
                    {
                        message: 'sciencemag',
                        url: 'https://advances.sciencemag.org/'
                    },
                    {
                        message: 'sciencedirect',
                        url: 'https://www.sciencedirect.com/'
                    },
                    {
                        message: '千万像素 petapixel',
                        url: 'https://petapixel.com/'
                    },
                    {
                        message: 'gamasutra',
                        url: 'https://gamasutra.com/'
                    },
                ]
            },
            {
                message: '金融网站',
                folders: [
                    {
                        message: '天天基金',
                        url: 'https://fund.eastmoney.com/'
                    },
                    {
                        message: '理杏仁',
                        url: 'https://www.lixinger.com/'
                    },
                    {
                        message: '晨星网',
                        url: 'https://www.morningstar.cn/main/default.aspx'
                    },
                    {
                        message: 'i问财',
                        url: 'http://www.iwencai.com/unifiedwap/home/index'
                    },
                ]
            },
            {
                message: '技术文档',
                folders: [
                    {
                        message: 'PigX admin/123456',
                        url: 'https://pigx.pig4cloud.com/#/login'
                    },
                    {
                        message: 'Vue',
                        url: 'https://cn.vuejs.org/v2/guide/'
                    },
                    {
                        message: 'Vue CLI',
                        url: 'https://cli.vuejs.org/zh/'
                    },
                    {
                        message: 'Vue Loader',
                        url: 'https://vue-loader.vuejs.org/zh/'
                    },
                    {
                        message: 'Vue Router',
                        url: 'https://router.vuejs.org/zh/'
                    },
                    {
                        message: 'Vuex',
                        url: 'https://vuex.vuejs.org/zh/'
                    },
                    {
                        message: 'Vue SSR',
                        url: 'https://ssr.vuejs.org/zh/'
                    },
                    {
                        message: 'Vue Element Admin',
                        url: 'https://panjiachen.gitee.io/vue-element-admin-site/zh/'
                    },
                    {
                        message: 'Vuepress',
                        url: 'https://www.vuepress.cn/'
                    },
                    {
                        message: 'Webpack',
                        url: 'https://webpack.docschina.org/concepts/'
                    },
                    {
                        message: 'npm',
                        url: 'https://docs.npmjs.com/'
                    },
                    {
                        message: 'ECMAScript6简介',
                        url: 'https://wangdoc.com/es6/intro.html'
                    },
                    {
                        message: 'ES6入门教程阮一峰',
                        url: 'https://es6.ruanyifeng.com/'
                    },
                    {
                        message: 'Javascript教程',
                        url: 'https://wangdoc.com/javascript/'
                    },
                    {
                        message: 'Mockjs',
                        url: 'http://mockjs.com/'
                    },
                    {
                        message: 'Element UI',
                        url: 'https://element.eleme.io/#/zh-CN'
                    },
                    {
                        message: 'Redis',
                        url: 'https://redis.io/'
                    },
                    {
                        message: 'Nginx',
                        url: 'http://nginx.org/en/download.html'
                    },
                    {
                        message: 'Tomcat',
                        url: 'https://tomcat.apache.org/'
                    },
                    {
                        message: 'Netty',
                        url: 'https://netty.io/'
                    },
                    {
                        message: 'Spring Cloud',
                        url: 'https://spring.io/projects/spring-cloud/'
                    },
                    {
                        message: 'Nacos',
                        url: 'https://nacos.io/zh-cn/docs/quick-start.html'
                    },
                    {
                        message: 'Hutool',
                        url: 'https://hutool.cn/docs/#/'
                    },
                    {
                        message: 'Git',
                        url: 'https://git-scm.com/book/zh/v2'
                    },
                    {
                        message: 'MySQL',
                        url: 'https://www.mysql.com/'
                    },
                    {
                        message: 'OpenResty',
                        url: 'http://openresty.org/cn/'
                    },
                    {
                        message: 'JavaGuide',
                        url: 'https://github.com/Snailclimb/JavaGuide'
                    },
                    {
                        message: 'CS Note',
                        url: 'https://github.com/CyC2018/CS-Notes'
                    },
                    {
                        message: 'Aliyun ons',
                        url: 'https://help.aliyun.com/document_detail/49323.html?spm=a2c4g.11186623.6.604.3b4a375dLle9v2'
                    },
                    {
                        message: 'java11 Doc',
                        url: 'https://www.apiref.com/java11-zh/index.html'
                    },
                ]
            },
            {
                message: '电子书籍',
                folders: [
                    {
                        message: 'Java编程的逻辑',
                        url: 'https://mp.weixin.qq.com/s/u_WmkE5meMWuZ81G5gHhBQ'
                    },
                    {
                        message: '刘大猫的财富之旅',
                        url: 'https://www.liudamao.com/'
                    },
                    {
                        message: 'Python100天之旅',
                        url: 'https://learnbyexample.github.io/100_page_python_intro/introduction.html'
                    },
                ]
            },
            {
                message: '在线工具',
                folders: [
                    {
                        message: 'JSON格式化',
                        url: 'https://www.json.cn/'
                    },
                    {
                        message: '极简插件',
                        url: 'https://chrome.zzzmh.cn/'
                    },
                    {
                        message: '有道云笔记',
                        url: 'https://note.youdao.com/web/'
                    },
                    {
                        message: '万有导航',
                        url: 'http://wanyouw.com/'
                    },
                    {
                        message: '世界各国网址大全',
                        url: 'http://www.world68.com/'
                    },
                    {
                        message: 'zfj',
                        url: 'https://zfj.sr9.xyz/user'
                    },
                    {
                        message: '图片压缩 ezgif',
                        url: 'https://ezgif.com/optimize'
                    },
                    {
                        message: '草料二维码',
                        url: 'https://cli.im/tools'
                    },
                ]
            },
            {
                message: '开发工具',
                folders: [
                    {
                        message: 'Eclipse',
                        url: 'https://www.eclipse.org/downloads/'
                    },
                    {
                        message: 'VS Code',
                        url: 'https://code.visualstudio.com/'
                    },
                    {
                        message: 'JetBrains',
                        url: 'https://www.jetbrains.com/'
                    },
                    {
                        message: 'SourceTree',
                        url: 'https://www.sourcetreeapp.com/'
                    },
                    {
                        message: 'Postman',
                        url: 'https://www.postman.com/'
                    },
                    {
                        message: 'Sequel Pro',
                        url: 'https://sequelpro.com/'
                    },
                    {
                        message: 'Navicat',
                        url: 'http://www.navicat.com.cn/'
                    },
                    {
                        message: 'Typora',
                        url: 'https://www.typora.io/'
                    },
                    {
                        message: 'QuickRedis',
                        url: 'https://quick123.net/'
                    },
                    {
                        message: 'DBeaver',
                        url: 'https://dbeaver.io/'
                    },
                    {
                        message: 'Charles',
                        url: 'https://www.charlesproxy.com/'
                    },
                    {
                        message: 'Deepl',
                        url: 'https://www.deepl.com/translator'
                    },
                    {
                        message: 'Dash',
                        url: 'https://kapeli.com/dash'
                    },
                    {
                        message: 'Sketch',
                        url: 'https://www.sketch.com/'
                    },
                    {
                        message: 'Alfred 3',
                        url: 'https://www.alfredapp.com/'
                    },
                ]
            },
            {
                message: '软件安装',
                folders: [
                    {
                        message: 'xclient',
                        url: 'https://xclient.info/'
                    }
                ]
            },
            {
                message: '新媒体',
                folders: [
                    {
                        message: '新榜',
                        url: 'https://www.newrank.cn/'
                    },
                    {
                        message: '微信公众号',
                        url: 'https://mp.weixin.qq.com/'
                    },
                    {
                        message: '微信视频号助手',
                        url: 'https://channels.weixin.qq.com/login'
                    },
                    {
                        message: '头条号',
                        url: 'https://mp.toutiao.com/profile_v4/index'
                    },
                    {
                        message: '微信听书助手',
                        url: 'https://x.at.qq.com/#/login'
                    },
                    {
                        message: '可能吧排版',
                        url: 'https://knb.im/mp/'
                    },
                    {
                        message: '秀米排版',
                        url: 'https://xiumi.us/studio/v5#/paper/for/new/cube/0'
                    },
                ]
            },
            {
                message: '学习网站',
                folders: [
                    {
                        message: '网易公开课',
                        url: 'https://open.163.com/'
                    },
                    {
                        message: '微信读书',
                        url: 'https://weread.qq.com/'
                    }
                ]
            },
            {
                message: '个人博客',
                folders: [
                    {
                        message: 'soynomm',
                        url: 'https://soynomm.com/'
                    },
                    {
                        message: '阿虚同学',
                        url: 'https://axutongxue.com/'
                    },
                    {
                        message: '阮一峰',
                        url: 'http://ruanyifeng.com/'
                    },
                    {
                        message: 'Git 剑指 offer 题解',
                        url: 'https://github.com/CyC2018/CS-Notes/blob/master/notes/%E5%89%91%E6%8C%87%20Offer%20%E9%A2%98%E8%A7%A3%20-%20%E7%9B%AE%E5%BD%95.md'
                    },
                    {
                        message: 'Git JavaGuide',
                        url: 'https://github.com/Snailclimb/JavaGuide'
                    },
                    {
                        message: '丁宇',
                        url: 'https://dingyu.me/blog/'
                    },
                ]
            },
            {
                message: '影视',
                folders: [
                    {
                        message: '纪录片',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'CCTV',
                                url: 'https://tv.cctv.com/yxg/index.shtml#datacid=dsj&datafl=&datadq=&fc=%E7%94%B5%E8%A7%86%E5%89%A7&datanf=&dataszm='
                            },
                            {
                                message: '行者物语',
                                url: 'http://jilupian.xzwyu.com/'
                            },
                            {
                                message: '纪录片天地',
                                url: 'http://www.jlpcn.net/'
                            },
                            {
                                message: '腾讯视频',
                                url: 'https://v.qq.com/doco/'
                            },
                            {
                                message: 'bilibili',
                                url: 'https://www.bilibili.com/documentary/'
                            },
                            {
                                message: '爱奇艺',
                                url: 'https://www.iqiyi.com/jilupian/'
                            },
                            {
                                message: '优酷',
                                url: 'https://jilupian.youku.com/'
                            },
                            {
                                message: '咪咕',
                                url: 'https://www.miguvideo.com/mgs/website/prd/index.html?pageId=5fa4bf015b384c0db8fbfecbdf1c2365'
                            },
                            {
                                message: '芒果TV',
                                url: 'https://www.mgtv.com/doc/?fpa=19687'
                            },
                            {
                                message: '西瓜视频',
                                url: 'https://www.ixigua.com/channel/jilupian/'
                            },
                        ]
                    },
                    {
                        message: '麻瓜影院',
                        url: 'http://maguays.cc/'
                    },
                    {
                        message: '小嘀咕影院',
                        url: 'http://m.xdg456.com/'
                    },
                ]
            },
            {
                message: '资源',
                folders: [
                    {
                        message: '故宫博物院藏品总数目',
                        url: 'https://zm-digicol.dpm.org.cn/'
                    },
                    {
                        message: '千亿像素看中国',
                        url: 'http://pf.bigpixel.cn/'
                    },
                    {
                        message: '全历史',
                        url: 'https://www.allhistory.com/'
                    },
                ]
            },
            {
                message: '免费图库',
                folders: [
                    {
                        message: 'unsplash',
                        url: 'https://unsplash.com/'
                    },
                    {
                        message: 'pexels',
                        url: 'https://www.pexels.com/'
                    },
                    {
                        message: 'gratisography',
                        url: 'https://gratisography.com/'
                    },
                    {
                        message: 'picjumbo',
                        url: 'https://picjumbo.com/'
                    },
                    {
                        message: 'pixabay',
                        url: 'https://pixabay.com/'
                    },
                    {
                        message: 'canva',
                        url: 'https://www.canva.com/photos/free/'
                    },
                    {
                        message: 'reshot',
                        url: 'https://www.reshot.com/'
                    },
                    {
                        message: 'rawpixel',
                        url: 'https://www.rawpixel.com/'
                    },
                    {
                        message: 'morguefile',
                        url: 'https://morguefile.com/'
                    },
                    {
                        message: 'pxhere',
                        url: 'https://pxhere.com/'
                    },
                    {
                        message: 'isorepublic',
                        url: 'https://isorepublic.com/'
                    },
                    {
                        message: 'polayoutu',
                        url: 'http://www.polayoutu.com'
                    },
                    {
                        message: 'GIF giphy',
                        url: 'https://giphy.com/'
                    },
                    {
                        message: 'GIF soogif',
                        url: 'https://www.soogif.com/'
                    },
                ]
            },
            {
                message: '免费作图工具',
                folders: [
                    {
                        message: 'yed',
                        url: 'https://www.yworks.com/products/yed-live'
                    },
                    {
                        message: 'processon',
                        url: 'https://www.processon.com/'
                    },
                    {
                        message: 'pencil',
                        url: 'https://pencil.evolus.vn/'
                    },
                    {
                        message: 'dia',
                        url: 'http://dia-installer.de/'
                    },
                    {
                        message: 'inkscape',
                        url: 'https://inkscape.org/'
                    },
                    {
                        message: 'draw',
                        url: 'https://www.draw.io/'
                    },
                    {
                        message: 'whimsical',
                        url: 'https://whimsical.co/'
                    },
                    {
                        message: 'plantuml',
                        url: 'http://www.plantuml.com/plantuml/'
                    },
                    {
                        message: 'mermaidjs',
                        url: 'https://mermaidjs.github.io/mermaid-live-editor/'
                    },
                    {
                        message: '迅捷画图',
                        url: 'https://www.liuchengtu.com/'
                    },
                    {
                        message: '百度脑图',
                        url: 'http://naotu.baidu.com/'
                    },
                    {
                        message: 'visual',
                        url: 'https://online.visual-paradigm.com'
                    },
                    {
                        message: 'creately',
                        url: 'https://creately.com/'
                    },
                    {
                        message: 'coggle',
                        url: 'https://coggle.it'
                    },
                ]
            },
            {
                message: '免费音乐（可商用）',
                folders: [
                    {
                        message: 'bensound',
                        url: 'https://www.bensound.com/'
                    },
                    {
                        message: 'wowa',
                        url: 'https://www.wowa.me/'
                    },
                    {
                        message: 'incompetech',
                        url: 'https://incompetech.com/music/'
                    },
                    {
                        message: 'incompetech search',
                        url: 'https://incompetech.filmmusic.io/search/'
                    },
                    {
                        message: 'freemusicarchive',
                        url: 'http://freemusicarchive.org/'
                    },
                    {
                        message: 'ccmixter',
                        url: 'http://ccmixter.org/'
                    },
                    {
                        message: 'jamendo',
                        url: 'https://www.jamendo.com/'
                    },
                    {
                        message: 'free-loops',
                        url: 'http://free-loops.com/'
                    },
                    {
                        message: 'freesound',
                        url: 'https://freesound.org/'
                    },
                    {
                        message: 'netlabels',
                        url: 'https://archive.org/details/netlabels'
                    },
                    {
                        message: 'jukedeck',
                        url: 'https://www.jukedeck.com/'
                    },
                    {
                        message: 'soundimage',
                        url: 'http://soundimage.org/'
                    },
                    {
                        message: 'soundbible（音效网站）',
                        url: 'http://soundbible.com/'
                    },

                ]
            },
            {
                message: '免费视频编辑器',
                folders: [
                    {
                        message: 'DaVinci Resolve',
                        url: 'https://www.blackmagicdesign.com/products/davinciresolve/'
                    },
                    {
                        message: 'shotcut',
                        url: 'https://shotcut.org/'
                    },
                    {
                        message: 'openshot',
                        url: 'https://www.openshot.org/'
                    },
                    {
                        message: 'kdenlive',
                        url: 'https://kdenlive.org'
                    },
                ]
            },
            {
                message: '办事',
                folders: [
                    {
                        message: '国家税务总局北京市税务局',
                        url: 'http://beijing.chinatax.gov.cn/'
                    },
                    {
                        message: '北京市人力资源和社会保障局',
                        url: 'http://rsj.beijing.gov.cn/'
                    },
                    {
                        message: '自然人电子税务局',
                        url: 'https://etax.chinatax.gov.cn/webstatic/'
                    },
                    {
                        message: '涿州城乡建设局',
                        url: 'http://www.zzdcxh.com:8621/',
                    },
                    {
                        message: '中华人民共和国住房和城乡建设部',
                        url: 'http://www.mohurd.gov.cn/zyglgd/index.html',
                    },
                ]
            }
        ]
    }
});

function clickFolder(data) {
    var next = data.nextElementSibling;
    if (next && next.style.display == "none") {
        next.style.display = "block";
    } else if (next && next.style.display == "block") {
        next.style.display = "none";
    }
}

(function () {
    console.log("onload");
})();
"use strict";

var vue = new Vue({
    el: '#menuList',
    data: {
        items: [
            {
                message: '技术文档',
                folders: [
                    {
                        message: 'Web',
                        url: '',
                        type: 'folder',
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
                        ]
                    },
                    {
                        message: 'Redis',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Redis',
                                url: 'https://redis.io/'
                            },
                        ]
                    },
                    {
                        message: 'Nginx',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Nginx',
                                url: 'http://nginx.org/en/download.html'
                            },
                            {
                                message: 'OpenResty',
                                url: 'http://openresty.org/cn/'
                            },
                        ]
                    },
                    {
                        message: '容器',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Tomcat',
                                url: 'https://tomcat.apache.org/'
                            },
                            {
                                message: 'Netty',
                                url: 'https://netty.io/'
                            },
                        ]
                    },
                    {
                        message: 'Spring',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Spring Cloud',
                                url: 'https://spring.io/projects/spring-cloud/'
                            },
                        ]
                    },
                    {
                        message: '微服务',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Nacos',
                                url: 'https://nacos.io/zh-cn/docs/quick-start.html'
                            },
                        ]
                    },
                    {
                        message: '消息队列',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'RocketMQ',
                                url: 'http://rocketmq.apache.org/docs/quick-start/'
                            },
                            {
                                message: 'Aliyun ons',
                                url: 'https://help.aliyun.com/document_detail/49323.html?spm=a2c4g.11186623.6.604.3b4a375dLle9v2'
                            },
                            {
                                message: 'Kafka',
                                url: 'http://kafka.apache.org/documentation/#gettingStarted'
                            },
                            {
                                message: 'Kafka Improvement Proposals',
                                url: 'http://cwiki.apache.org/confluence/display/KAFKA/Kafka+Improvement+Proposals'
                            },
                            {
                                message: '消息队列设计论文',
                                url: 'https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying'
                            },
                            {
                                message: '消息队列设计论文（中文）',
                                url: 'https://www.kancloud.cn/kancloud/log-real-time-datas-unifying/58708'
                            },
                            {
                                message: 'Confluo',
                                url: 'https://www.usenix.org/conference/nsdi19/presentation/khandelwal'
                            },
                        ]
                    },
                    {
                        message: '工具集',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Hutool',
                                url: 'https://hutool.cn/docs/#/'
                            },
                            {
                                message: 'java-decompiler',
                                url: 'http://java-decompiler.github.io/'
                            },
                        ]
                    },
                    {
                        message: 'Java',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'Java7 Doc',
                                url: 'https://docs.oracle.com/javase/7/docs/api/index.html'
                            },
                            {
                                message: 'Java8 Doc',
                                url: 'https://docs.oracle.com/javase/8/docs/api/'
                            },
                            {
                                message: 'Java9 Doc',
                                url: 'https://docs.oracle.com/javase/9/docs/api/overview-summary.html'
                            },
                            {
                                message: 'Java10 Doc',
                                url: 'https://docs.oracle.com/javase/10/docs/api/overview-summary.html'
                            },
                            {
                                message: 'Java11 Doc',
                                url: 'https://docs.oracle.com/en/java/javase/11/docs/api/index.html'
                            },
                            {
                                message: 'Java12 Doc',
                                url: 'https://docs.oracle.com/en/java/javase/12/docs/api/index.html'
                            },
                            {
                                message: 'Java13 Doc',
                                url: 'https://docs.oracle.com/en/java/javase/13/docs/api/index.html'
                            },
                            {
                                message: 'Java14 Doc',
                                url: 'https://docs.oracle.com/en/java/javase/14/docs/api/index.html'
                            },
                            {
                                message: 'Java15 Doc',
                                url: 'https://docs.oracle.com/en/java/javase/15/docs/api/index.html'
                            },
                            {
                                message: 'Java Community Process',
                                url: 'https://jcp.org/en/home/index'
                            },
                            {
                                message: 'JavaGuide',
                                url: 'https://github.com/Snailclimb/JavaGuide'
                            },
                            {
                                message: 'CS Notes',
                                url: 'https://github.com/CyC2018/CS-Notes'
                            },
                        ]
                    },
                    {
                        message: '数据库',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'MySQL',
                                url: 'https://www.mysql.com/'
                            },
                        ]
                    },
                    {
                        message: '算法',
                        url: '',
                        type: 'folder',
                        folders: [
                            {
                                message: 'doocs leetcode',
                                url: 'https://doocs.gitee.io/#/README_CN'
                            },
                        ]
                    },
                    {
                        message: 'Git',
                        url: 'https://git-scm.com/book/zh/v2'
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
                    {
                        message: 'ECMAScript6入门',
                        url: 'https://es6.ruanyifeng.com/#docs/async'
                    },
                    {
                        message: 'ECMAScript6简介',
                        url: 'https://wangdoc.com/es6/intro.html'
                    },
                    {
                        message: 'Java教程 廖雪峰',
                        url: 'https://www.liaoxuefeng.com/wiki/1252599548343744'
                    },
                    {
                        message: '深入浅出Java多线程',
                        url: 'https://redspider.gitbook.io/concurrent/'
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
                message: '免费资源',
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
                    {
                        message: '全景客 虚拟旅游',
                        url: 'https://www.quanjingke.com/'
                    },
                    {
                        message: '方正字库',
                        url: 'http://www.foundertype.com/'
                    },
                ]
            },
            {
                message: '每周分享',
                folders: [
                    {
                        message: '每周分享01（2021年3月第1期）',
                        url: 'https://mp.weixin.qq.com/s/7hzK33dcyTMJXssZ6eTQLw'
                    },
                    {
                        message: '每周分享02（2021年3月第2期）',
                        url: 'https://mp.weixin.qq.com/s/hRN86rzCcBqmbmMhU2tFpQ'
                    },
                    {
                        message: '每周分享03（2021年4月第1期）',
                        url: 'https://mp.weixin.qq.com/s/v-OZk9IDPKA4syKHXf3yAg'
                    },
                    {
                        message: '每周分享04（2021年4月第2期）',
                        url: 'https://mp.weixin.qq.com/s/8UXx-Zgc9ZQAcI22pTOyaw'
                    },
                    {
                        message: '每周分享05（2021年4月第3期）',
                        url: 'https://mp.weixin.qq.com/s/s3vnedr-rCqoXgvBD4csGg'
                    },
                    {
                        message: '每周分享06（2021年4月第4期）',
                        url: 'https://mp.weixin.qq.com/s/6ZjQ2EGVaw7WuBPiSBOj4g'
                    },
                    {
                        message: '每周分享07（2021年5月第1期）',
                        url: 'https://mp.weixin.qq.com/s/SCni3VizeSvtjUdaAYxDqA'
                    },
                    {
                        message: '每周分享08（2021年5月第2期）',
                        url: 'https://mp.weixin.qq.com/s/f4tRSMluPQlx6elxoqSi3Q'
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
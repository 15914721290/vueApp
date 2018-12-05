# 优选商城H5v1.2.0

## 文档
- CF地址：http://183.6.116.151:8090/pages/viewpage.action?pageId=3244858
- SVN地址：项目文档\优选商城项目\需求文档\优选商城APP0920
- 风控需求地址：http://192.168.1.246:84/svn/项目文档/优选商城项目/需求文档/优选商城风控需求V1.0
- 业务接口文档：https://docs.qq.com/sheet/DQ0RaWlNoclpQYnJt?tab=BB08J2
- 风控接口文档：https://docs.qq.com/sheet/B2UzKT4slZs73rdamp38Y7ya2AvRfT3FEGbL49AFGo2G46Bv3eSHob2QHCk21bRHBH4AK2Dd1?tab=lbsyi8

# 技术栈
- flexible：手淘的移动端适配方案，大小单位使用rem
- vue + vue-router + vuex
- 本地储存使用 localStorage
- vue-awesome-swiper 轮播图 https://www.npmjs.com/package/vue-awesome-swiper

## 目录结构
+ -- build -- 项目构建的相关代码
+ -- config -- 配置目录
+ -- doc --  UI、切图、标注等
+ -- src -- 开发的主要目录
    + -- api: 接口方法
    + -- asset: 放置一些公共静态资源js, less, img等文件
    + -- components: 主要放置一些常用的组件文件
    + -- App.vue: 项目的入口文件(顶层父组件)
    + -- main.js: 项目的核心文件(vue的实例初始化)
    + -- pages: 新建一个目录，主要存放页面
        + -- account: 账户模块，包括注册登录等
        + -- address: 地址模块
        + -- balance: 资金模块
        + -- bank: 银行存管模块
        + -- bill: 账单模块
        + -- goods: 商品模块
        + -- iframe: iframe
        + -- index: 主页
        + -- me: 我的页面
        + -- order: 订单模块
        + -- shoppingCar: 购物车模块
        + -- static: 静态文件目录，包含各种协议
        + -- topic: 专题模块
    + -- utils: 主要存放公共方法
    + -- config: 开发所需配置信息
+ -- README.md: 项目说明文档
+ -- package.json: 项目依赖包
+ -- project.config.json: 配置文件

## 手动部署
`npm run build`后，把dist目录中的所有文件放在服务器根目录。

测试服务器：
- 内部IP：http://192.168.1.233:3023
- 公网访问地址 http://183.6.116.151:3023
- ssh账号`root`
- 密码`bcb@123456`
- 路径：`/lvdata/www/youxuan_h5`。把build出来的东西放在这里，即可更新了。

正式服务器：
地址：https://web.youxuanstore.cn (更新线上版本需要打包后找权哥更新)

```
npm run build && scp -r dist/* root@192.168.1.233:/lvdata/www/youxuan_h5/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

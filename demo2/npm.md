创建package.json
npm init


1、安装 npm install xxx
2、安装指定版本的包 npm install xxx@version
-S 保存到 dependencies
-D 保存到 devDependencies
^ 表示第一位版本不变，后两位取最小
~ 表示前两位版本不变，最后一位取最新
* 表示全部取最新版本

3、卸载 npm uninstall xxx
4、查看列表 npm list
5、查看版信息 npm info xxx


6、安装cnpm
npm install -g cnpm -registry=https://registry.npm.taobao.org


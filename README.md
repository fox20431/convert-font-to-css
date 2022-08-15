# convert font to base64

目的是将字体文件以 BASE64 方式嵌入 CSS 文件中。

参考：https://github.com/amerlin/convertfont

## usage

1. 为该项目创建 `./fonts/` 目录；
2. 把想要转成 base64 的文件（woff2/woff/ttf）放入`./fonts/`；
3. 创建`./fonts-base64.css` 文件；
4. 执行 `node ./main.js`；
5. 去 `./fonts-base64.css` 查看输出结果。

font-family 与文件名主干（stem）相同。

## NPM 开发脚本库

- 在 package.json 中加入：

```JavaScript
"bin": {
  "qiex": "lib/index.js"
},
```
- 在 node 启动的入口文件第一行加上：

```
#!/usr/bin/env node
```
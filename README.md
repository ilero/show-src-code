# show-src-code

> vue插件，用于在页面上展示代码，

## Build Setup

``` bash

在 package.json 添加：
  "dependencies": {
    ...
    "show-src-code": "^1.0.0",
    ...
  },
  
  然后执行命令： npm install
  
  之后在.vue 文件中引入：
  import showSrcCode from "show-src-code"
  components: {
      ...
      showSrcCode
      ...
    },
    
   <template>
      <show-src-code :json="haha" ></show-src-code>
   </template>

   其中，json 为必传值
    
    
```


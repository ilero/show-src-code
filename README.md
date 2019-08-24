# show-src-code

> vue插件，用于在页面上展示代码，

## 功能描述

```text
   
   使用插件前:
   
   '{"aa":1, "bb": 2, "cc": 3}'
   
   使用插件后: (你在浏览器上看见的就是如下效果，支持欠套数组对象什么的)
   
   1   |   {
   2   |      "aa": 1,
   3   |      "bb": 2,
   4   |      "cc": 3,
   5   |   } 


```


## 构建步骤

``` bash

  npm install show-src-code
  
  之后在.vue 文件中：
  
  import showSrcCode from "show-src-code"
  
  components: {
    ...
    showSrcCode
    ...
  },
    
 <template>
    <show-src-code :json="data" ></show-src-code>
 </template>

 其中，json 为必传值
    
    
```


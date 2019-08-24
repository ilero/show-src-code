<template>
  <div class="pt-code-area">
    <div class="pt-code">
        <pre class="pt-code-content" v-html="innerHtml(json)"></pre>
    </div>
  </div>
</template>

<script>
  import { j2h } from "@/libs/tools"

  export default {
    name: "show-src-code",
    props: ["json"],
    mounted(){},
    methods : {
      innerHtml: function (json) {
        return j2h(json);
      }
    }
  }
</script>

<style lang="less">
  @import "./code.less";
</style>

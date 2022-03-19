<template>
  <div ref="editor"></div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop, Emit, Watch } from "vue-property-decorator";
import E from "wangeditor";
@Component({
  name: "Editor",
})
export default class Editor extends Vue {
  @Ref("editor") editorRef: any;

  @Prop()
  value!: string;

  @Prop()
  disabled!: boolean;

  @Emit("input")
  handle(newHtml: string) {
    return newHtml;
  }

  @Watch("value")
  watchValue(val: string) {
    this.editor.txt.html(val); // 重新设置编辑器内容
  }

  @Watch("disabled")
  wathcDisabled(value: boolean) {
    value ? this.editor.disable() : this.editor.enable();
  }

  private editor: any = null;

  mounted() {
    const editor = new E(this.editorRef);
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml: string) => {
      console.log("newHtml:", newHtml);
      this.handle(newHtml);
    };
    // 创建编辑器
    editor.create();
    editor.txt.html(this.value); // 重新设置编辑器内容
    this.value ? editor.disable() : editor.enable();
    this.editor = editor;
  }

  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  }
}
</script>

<style lang="less" scoped>
/deep/ .w-e-content-mantle {
  background: #f1f3f4;
}
</style>

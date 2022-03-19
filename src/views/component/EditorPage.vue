<template>
  <div>
    <span>禁用编辑器:</span>
    <el-switch v-model="disabled"> </el-switch>
    <el-row>
      <el-col :span="12">
        <p>v-model绑定</p>
        <Editor v-model="text1" :disabled="disabled" />
        <p>text1:</p>
        {{ text1 }}
      </el-col>
      <el-col :span="12">
        <p>value 和 @input绑定</p>
        <Editor :value="text2" @input="handleInput" :disabled="disabled" />
        <p>text2:</p>
        {{ text2 }}
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Editor } from "@/components";
@Component({
  name: "EditorPage",
  components: { Editor },
})
export default class EditorPage extends Vue {
  private text1 = "defalutText1";
  private text2 = "defaultText2";
  private disabled = true;

  mounted() {
    setTimeout(() => {
      this.text1 = "<p>这是接口获取到的数据text1</p>";
      this.text2 = "这是接口获取到的数据text2";
    }, 3000);
  }

  handleInput(html: string) {
    this.text2 = html;
  }
}
</script>

<style lang="less" scoped></style>

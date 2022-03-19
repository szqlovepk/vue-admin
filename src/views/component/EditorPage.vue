<template>
  <el-row>
    <el-col :span="12">
      <Editor v-model="text1" />
      <p>text1:</p>
      {{ text1 }}
    </el-col>
    <el-col :span="12">
      <Editor :value="text2" @input="handleInput" />
      <p>text2:</p>
      {{ text2 }}
    </el-col>
  </el-row>
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

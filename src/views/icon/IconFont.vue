<template>
  <div class="inconfont__container">
    <p>
      图标引入自<a href="https://www.iconfont.cn/" target="_blank">iconfont库</a
      >，你也可以在iconfont中创建自己的图标项目然后引入使用
    </p>
    <div class="margin">
      切换字体大小:
      <el-switch v-model="fontflag"> </el-switch>
    </div>
    <div class="margin">
      切换字体颜色:
      <el-switch v-model="colorflag"> </el-switch>
    </div>
    <div class="icon__container">
      <div class="box" v-for="icon in icons" :key="icon.class">
        <i
          :class="[
            'iconfont',
            icon.class,
            { font: fontflag },
            { color: colorflag },
          ]"
        />
        <p>{{ icon.name }}</p>
        <p>{{ icon.class }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "IconFont",
})
export default class IconFont extends Vue {
  private fontflag = false;
  private colorflag = false;
  private icons = [
    { name: "减号", class: "icon-admin-jianhao" },
    { name: "关闭01", class: "icon-admin-guanbi1" },
    { name: "分享", class: "icon-admin-fenxiang" },
    { name: "添加01", class: "icon-admin-jiahao1" },
    { name: "商城", class: "icon-admin-gouwudai" },
    { name: "客服", class: "icon-admin-kefu" },
    { name: "购物车", class: "icon-admin-gouwuche" },
    { name: "提示", class: "icon-admin-tishi" },
    { name: "添加02", class: "icon-admin-jiahao" },
    { name: "对号", class: "icon-admin-xuanze" },
    { name: "问号", class: "icon-admin-wenhao" },
    { name: "未选中02", class: "icon-admin-yuanxingweixuanzhong" },
    { name: "攻略", class: "icon-admin-gonglve" },
    { name: "选中02", class: "icon-admin-yuanxingxuanzhong" },
    { name: "关闭02", class: "icon-admin-guanbi2" },
    { name: "更多", class: "icon-admin-androidgengduo" },
    { name: "阅读", class: "icon-admin-bangzhuzhongxin" },
    { name: "类目", class: "icon-admin-leimu" },
    { name: "加载", class: "icon-admin-jiazai" },
    { name: "菜单", class: "icon-admin-caidan" },
    { name: "销售", class: "icon-admin-sale" },
    { name: "刷新", class: "icon-admin-shuaxin" },
    { name: "向右03", class: "icon-admin-xiangyou3" },
    { name: "向左01", class: "icon-admin-xiangzuo1" },
    { name: "向左02", class: "icon-admin-xiangzuo2" },
    { name: "银行卡", class: "icon-admin-xinyongqia" },
    { name: "点赞", class: "icon-admin-zantong" },
    { name: "底部", class: "icon-admin-dibu" },
    { name: "向上02", class: "icon-admin-xiangshang2" },
    { name: "顶部", class: "icon-admin-dingbu" },
    { name: "向下02", class: "icon-admin-xiangxia2" },
    { name: "向下03", class: "icon-admin-xiangxia3" },
    { name: "向上03", class: "icon-admin-xiangshang3" },
    { name: "位置", class: "icon-admin-zuobiao" },
    { name: "向下03", class: "icon-admin-xiangxia31" },
    { name: "上传", class: "icon-admin-shangchuan" },
    { name: "向右02", class: "icon-admin-xiangyou2" },
    { name: "排序", class: "icon-admin-zhengli" },
    { name: "其他", class: "icon-admin-others" },
    { name: "类别", class: "icon-admin-danpin" },
    { name: "二维码", class: "icon-admin-erweima" },
    { name: "删除", class: "icon-admin-shanchu" },
    { name: "设置", class: "icon-admin-shezhi" },
    { name: "时间", class: "icon-admin-shizhong" },
    { name: "身份", class: "icon-admin-shenfen" },
    { name: "通知", class: "icon-admin-tongzhi" },
    { name: "搜索", class: "icon-admin-sousuo" },
    { name: "搜索列表", class: "icon-admin-sousuoleimu" },
    { name: "首页", class: "icon-admin-shouye" },
    { name: "退款", class: "icon-admin-tuikuan" },
    { name: "喜欢", class: "icon-admin-xihuan" },
    { name: "我的", class: "icon-admin-wode" },
    { name: "消息", class: "icon-admin-xinxi" },
    { name: "团队", class: "icon-admin-team" },
    { name: "筛选", class: "icon-admin-shaixuan" },
    { name: "清除", class: "icon-admin-qingchu" },
    { name: "扫码", class: "icon-admin-saoma" },
    { name: "券", class: "icon-admin-quan" },
    { name: "未收藏", class: "icon-admin-biaoxing" },
    { name: "撤销", class: "icon-admin-chexiao" },
    { name: "单选", class: "icon-admin-danxuan" },
    { name: "未选中01", class: "icon-admin-fangxingweixuanzhong" },
    { name: "更多", class: "icon-admin-gengduo" },
    { name: "店铺", class: "icon-admin-dianpu" },
    { name: "反馈", class: "icon-admin-fankui" },
    { name: "选中01", class: "icon-admin-fangxingxuanzhong" },
    { name: "github", class: "icon-admin-github" },
  ];
}
</script>

<style lang="less" scoped>
.inconfont__container {
  .margin {
    margin-bottom: 10px;
  }
  .icon__container {
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    .box {
      border: 1px dashed #e0e0e0;
      width: 200px;
      text-align: center;
      padding: 10px;
    }
    .font {
      font-size: 20px;
    }
    .color {
      color: #409eff;
    }
  }
}
</style>

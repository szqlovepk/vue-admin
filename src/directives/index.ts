import authModule from "@/store/modules/auth";

const directives = {
  focus: {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el: any) {
      // 聚焦元素
      el.focus();
    },
  },
  auth: {
    inserted: function (el: any, binding: any) {
      const arg = binding?.arg;
      const auths = authModule.auths;
      if (!auths?.includes(arg as string)) {
        el.parentNode?.removeChild(el);
      }
    },
  },
};

export default directives;

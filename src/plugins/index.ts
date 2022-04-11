import directives from "@/directives";
const myPlugin = {
  install: function (Vue: any) {
    console.log("directives:", directives);
    Object.keys(directives).forEach((directive: any) => {
      Vue.directive(directive, (directives as any)[directive]);
    });
  },
};

export default myPlugin;

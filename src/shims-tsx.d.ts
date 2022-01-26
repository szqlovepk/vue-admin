import Vue, { VNode } from "vue";
import { AxiosRequestConfig } from "axios";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    [key: string]: any;
  }
}

declare module "axios" {
  export interface AxiosRequestConfig {
    // [自定义属性声明]
    loading?: boolean;
  }
}

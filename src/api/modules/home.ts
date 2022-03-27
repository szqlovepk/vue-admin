import { createAxiosByinterceptors } from "@/api/request";
import url from "@/constant/url";
const vueAppEnv = process.env.VUE_APP_ENV;

const request = createAxiosByinterceptors({
  baseURL: (url as any)[vueAppEnv as any].home,
});

export const appList = (params: any): Promise<any> =>
  request.get("/app", { params, loading: true }); // 不需要默认的全局loading效果可配置loading为false关闭 loading默认为true

export const pageMenus = (params: any): Promise<any> =>
  request.get("/appPage/menusTree", {
    params,
    loading: true,
  });

export const exportGoods = (data: any) =>
  request.post("/promo_gateway_item_b2b/1.0/export", data, {
    responseType: "blob",
  });

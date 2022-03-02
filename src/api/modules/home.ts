import { createAxiosByinterceptors } from "@/api/request";

const request = createAxiosByinterceptors({
  baseURL: "http://localhost:7009",
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

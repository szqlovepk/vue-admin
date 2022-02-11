import { createAxiosByinterceptors } from "@/api/request";

const request = createAxiosByinterceptors({
  baseURL: "http://gnarapi.qa.91jkys.com",
});

export const appList = (params: any): Promise<any> =>
  request.get("/app", { params, loading: true }); // 不需要默认的全局loading效果可配置loading为false关闭 loading默认为true

export const pageMenus = (): Promise<any> =>
  request.get("/appPage/menusTree?appId=87&versionId=47", { loading: true });

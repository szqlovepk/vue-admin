import { createAxiosByinterceptors } from "@/api/request";

const request = createAxiosByinterceptors({
  baseURL: "http://gnarapi.qa.91jkys.com",
});

export const appList = (params: any): Promise<any> =>
  request.get("/app", { params });

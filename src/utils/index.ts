import { Message } from "element-ui";
import { AxiosResponse } from "axios";
import vm from "@/main";
import { IBaseRouter } from "@/router/config";
import authModule from "@/store/modules/auth";

/**
 *   跳转登录
 */
export const jumpLogin = () => {
  vm.$Cookies.remove("vue_admin_token");
  vm.$router.push(`/login?redirect=${encodeURIComponent(vm.$route.fullPath)}`);
};

/**
 * 下载文件
 * @param response
 * @returns
 */
export const downloadFile = (response: AxiosResponse) => {
  console.log("response.data.type:", response.data.type);
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      try {
        console.log("result:", this.result);
        const jsonData = JSON.parse((this as any).result); // 成功 说明是普通对象数据
        if (jsonData?.code !== 200) {
          Message.error(jsonData?.message ?? "请求失败");
          reject(jsonData);
        }
      } catch (err) {
        // 解析成对象失败，说明是正常的文件流
        const blob = new Blob([response.data]);
        // 本地保存文件
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        const filename = response?.headers?.["content-disposition"]
          ?.split("filename*=")?.[1]
          ?.substr(7);
        link.setAttribute("download", decodeURI(filename));
        document.body.appendChild(link);
        link.click();
        resolve(response.data);
      }
    };
    fileReader.readAsText(response.data);
  });
};

/**
 * 判断路由有无权限  路由无auth配置时默认都有
 * @param route
 * @param auths
 * @returns
 */
export const hasAuth = (route: IBaseRouter, auths: Array<string> | null) => {
  if (route?.meta?.auth) {
    return auths?.includes(route?.meta?.auth);
  } else {
    return true;
  }
};

/**
 * 递归过滤出有权限的路由
 * @param routes
 * @returns
 */
export const filterAuthRoutes = (routes: Array<IBaseRouter>) => {
  const authRoutes: Array<IBaseRouter> = [];
  const auths = authModule.auths;
  routes.forEach((route) => {
    if (hasAuth(route, auths)) {
      let children = undefined;
      if (route?.children) {
        children = filterAuthRoutes(route.children);
      }
      authRoutes.push({ ...route, children });
    }
  });
  return authRoutes;
};

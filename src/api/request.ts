import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Message } from "element-ui";
import { jumpLogin } from "@/utils";
import { Loading } from "element-ui";
import { ElLoadingComponent } from "element-ui/types/loading";

let loadingInstance: ElLoadingComponent | null = null;
let requestNum = 0;

const addLoading = () => {
  // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
  requestNum++;
  if (requestNum == 1) {
    loadingInstance = Loading.service({
      text: "正在努力加载中....",
      background: "rgba(0, 0, 0, 0)",
    });
  }
};

const cancelLoading = () => {
  // 取消loading 如果pending请求数量等于0，关闭loading
  requestNum--;
  if (requestNum === 0) loadingInstance?.close();
};

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    //baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    withCredentials: true,
    // headers: {
    //   Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ6aGlxaWFuZ3NoYW5nQDkxamt5cy5jb20iLCJpYXQiOjE2NDE0NDAzMjR9.vLJPVB2IEh7gN6ClGAKaPrlkotsCR4ncmRnEXzGeZVA",
    // },
    ...config,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      const { loading = true } = config;
      console.log("config:", config);
      // 在发送请求之前做些什么
      config.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ6aGlxaWFuZ3NoYW5nQDkxamt5cy5jb20iLCJpYXQiOjE2NDE0NDAzMjR9.vLJPVB2IEh7gN6ClGAKaPrlkotsCR4ncmRnEXzGeZVA";
      if (loading) addLoading();
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      console.log("response:", response);
      const { loading = true } = response.config;
      if (loading) cancelLoading();
      // 对响应数据做点什么
      const { code, data, message } = response.data;
      if (code === 200) return data;
      else if (code === 401) {
        jumpLogin();
      } else {
        Message.error(message);
        return Promise.reject(response.data);
      }
    },
    function (error) {
      console.log("error-response:", error.response);
      console.log("error-config:", error.config);
      console.log("error-request:", error.request);
      const { loading = true } = error.config;
      if (loading) cancelLoading();
      if (error.response) {
        if (error.response.status === 401) {
          jumpLogin();
        }
      }
      Message.error(error?.response?.data?.message || "服务端异常");

      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  return instance;
};

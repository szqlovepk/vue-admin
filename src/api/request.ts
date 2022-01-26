import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Message } from "element-ui";

export const createAxiosByinterceptors = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    //baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    withCredentials: true,
    ...config,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
    function (config: any) {
      console.log(config);
      // 在发送请求之前做些什么
      config.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ6aGlxaWFuZ3NoYW5nQDkxamt5cy5jb20iLCJpYXQiOjE2NDE0NDAzMjR9.vLJPVB2IEh7gN6ClGAKaPrlkotsCR4ncmRnEXzGeZVA";
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
      // 对响应数据做点什么
      const { code, data, message } = response.data;
      if (code === 200) return data;
      else {
        Message.error(message);
        return Promise.reject(response.data);
      }
    },
    function (error) {
      console.log("response:", error.response);
      // console.log("config:", error.config);
      // console.log("request:", error.request);
      if (error.response) {
        if (error.response.status === 401) {
          // todo: 跳转登录页面
        }
        Message.error(error?.response?.data?.message || "服务端异常");
      }

      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  return instance;
};

import { AxiosRequestConfig } from "axios";

export default function tokenInterceptor() {
  return (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      return {
        ...config,
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    }

    return config;
  };
}

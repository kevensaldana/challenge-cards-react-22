import axios, { AxiosRequestConfig } from "axios";

export class HttpError<T = any> extends Error {
  constructor(message: string, public code?: string, public response?: T) {
    super(message);
  }
}

export interface HttpRequestConfig {
  headers?: Record<string, string | number | boolean>;
}

export interface HttpInterceptorRequest {
  onRequest: (config: AxiosRequestConfig) => AxiosRequestConfig;
}

export class HttpResponse<T = any> {
  constructor(public status: number, public data: T) {}
}

export default class Http {
  private static mapError(error: unknown) {
    if (axios.isAxiosError(error)) {
      const { message, code, response } = error;
      return new HttpError(message, code, response);
    }

    return new Error((error as Error).message);
  }

  static async get<T>(url: string) {
    try {
      return await axios.get<T>(url).then((response) => {
        return new HttpResponse(response.status, response.data);
      });
    } catch (error) {
      throw Http.mapError(error);
    }
  }

  static async post<T>(url: string, data: any, config?: HttpRequestConfig) {
    try {
      return await axios
        .post<T>(url, data, config)
        .then((response) => new HttpResponse(response.status, response.data));
    } catch (error) {
      throw Http.mapError(error);
    }
  }

  static async put<T>(url: string, data: any, config?: HttpRequestConfig) {
    try {
      return await axios
        .put<T>(url, data, config)
        .then((response) => new HttpResponse(response.status, response.data));
    } catch (error) {
      throw Http.mapError(error);
    }
  }

  static async delete<T>(url: string, config?: HttpRequestConfig) {
    try {
      return await axios
        .delete<T>(url, config)
        .then((response) => new HttpResponse(response.status, response.data));
    } catch (error) {
      throw Http.mapError(error);
    }
  }

  static addRequestInterceptors(
    interceptors: Array<(config: AxiosRequestConfig) => AxiosRequestConfig>
  ) {
    interceptors.forEach((interceptor) => {
      axios.interceptors.request.use(interceptor, (error) => {
        Promise.reject(error);
      });
    });
  }
}

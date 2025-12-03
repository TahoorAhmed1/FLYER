import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api`;

interface CustomAxiosInstance {
  defaults: any;
  interceptors: {
    request: {
      use: (
        onFulfilled: (config: any) => any,
        onRejected?: (error: any) => any
      ) => void;
    };
    response: {
      use: (
        onFulfilled: (response: any) => any,
        onRejected?: (error: any) => any
      ) => void;
    };
  };
  get: (url: string, config?: any) => Promise<any>;
  post: (url: string, data?: any, config?: any) => Promise<any>;
  put: (url: string, data?: any, config?: any) => Promise<any>;
  delete: (url: string, config?: any) => Promise<any>;
  patch: (url: string, data?: any, config?: any) => Promise<any>;
  request: (config: any) => Promise<any>;
  registerUser: (data: Record<string, any>) => Promise<any>;
  loginUser: (data: Record<string, any>) => Promise<any>;

  otpVerification: (data: Record<string, any>) => Promise<any>;
  resetPasswordProcess: (
    data: Record<string, any>,
    token: string
  ) => Promise<any>;
  resetPassword: (data: Record<string, any>) => Promise<any>;
  SignIn: (data: Record<string, any>) => Promise<any>;
  profileUpdate: (data: Record<string, any>) => Promise<any>;
  updateProfile: (data: Record<string, any>) => Promise<any>;
  forgotPassword: (data: Record<string, any>) => Promise<any>;
  contactUs: (data: Record<string, any>) => Promise<any>;
  resendOtp: () => Promise<any>;
  logout: () => Promise<any>;
  getProfile: () => Promise<any>;
  getUser: () => Promise<any>;
  getAllLifeArea: () => Promise<any>;
  getRetailer: () => Promise<any>;
  getProduct: (id: any) => Promise<any>;
  getCategory: () => Promise<any>;
  getProductByCategory: (category_id: any) => Promise<any>;
subscribe: (data: any) => Promise<any>;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  maxContentLength: 20 * 1024 * 1024,
  maxBodyLength: 20 * 1024 * 1024,
}) as any;

axiosInstance.interceptors.request.use(
  (config: any): any => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

axiosInstance.registerUser = (data: Record<string, any>) => {
  return axiosInstance.post("/register", data);
};
axiosInstance.updateProfile = (data: Record<string, any>) => {
  return axiosInstance.patch("/auth/profile/update", data);
};
axiosInstance.contactUs = (data: Record<string, any>) => {
  return axiosInstance.post("/contact/store", data);
};
axiosInstance.getProduct = (id: Record<string, any>) => {
  return axiosInstance.get(`/product/${id}`);
};

axiosInstance.subscribe = (data: any) => {
  return axiosInstance.post(`/newsletter/store`, data);
};

axiosInstance.otpVerification = (data: Record<string, any>) => {
  const emailToken = localStorage.getItem("email_token");
  return axiosInstance.post(
    "/auth/verify",
    {
      ...data,
    },
    {
      headers: {
        authorization: emailToken,
      },
    }
  );
};

axiosInstance.resendOtp = (data: Record<string, any>) => {
  const emailToken = localStorage.getItem("email_token");
  return axiosInstance.post("/auth/resend-otp", data, {
    headers: {
      authorization: emailToken,
    },
  });
};

axiosInstance.loginUser = (data: Record<string, any>) => {
  return axiosInstance.post("/login", data);
};

axiosInstance.forgotPassword = (data: Record<string, any>) => {
  return axiosInstance.post("/auth/generateForgetLink", data);
};
axiosInstance.resetPasswordProcess = (
  data: Record<string, any>,
  token: Record<string, any>
) => {
  return axiosInstance.post("/auth/new-password", data, {
    headers: {
      authorization: token,
    },
  });
};
axiosInstance.resetPassword = (data: Record<string, any>) => {
  return axiosInstance.patch("/auth/resetpassword", data);
};
axiosInstance.logout = () => {
  const token = Cookies.get("token");
  return axiosInstance.get("/logout", {
    headers: {
      authorization: token,
    },
  });
};

axiosInstance.getCategory = () => {
  return axiosInstance.get("/categories");
};

axiosInstance.getRetailer = () => {
  const token = Cookies.get("token");
  return axiosInstance.get("/retailers", {
    headers: {
      authorization: token,
    },
  });
};

axiosInstance.getProduct = () => {
  const token = Cookies.get("token");
  return axiosInstance.get("/client/product", {
    headers: {
      authorization: token,
    },
  });
};
axiosInstance.getProductByCategory = (category_id: any) => {
  const token = Cookies.get("token");
  return axiosInstance.get(`/categories/${category_id}/products`, {
    headers: {
      authorization: token,
    },
  });
};

axiosInstance.getUser = () => {
  const token = Cookies.get("token");
  return axiosInstance.get("/auth", {
    headers: {
      authorization: token,
    },
  });
};

const API: CustomAxiosInstance = axiosInstance;

export { API };

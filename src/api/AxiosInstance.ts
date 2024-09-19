"use strict";
import axios from "axios";
import store from "../store";

const BaseUrlLocale = "";

const AxiosInstance = axios.create({
  baseURL: BaseUrlLocale,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use((request) => {
  const { access_token } = store.getState()?.user?.userData;

  if (access_token) {
    request.headers.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

AxiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    let errorObj;
    if (error.response) {
      errorObj = JSON.parse(JSON.stringify(error.response));
    } else {
      errorObj = JSON.parse(JSON.stringify(error));
    }

    if (errorObj.status == 401) {
      ///logout user
      throw errorObj;
    } else {
      throw errorObj;
    }
  }
);

export default AxiosInstance;

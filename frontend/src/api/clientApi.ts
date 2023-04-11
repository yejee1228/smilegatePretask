import axios from "axios";
import { IUser } from "@/types";

const clientApi = axios.create({
  baseURL: 'http://localhost:8080',
});

//user list
export const getCouponList = async () => {
  const { data } = await clientApi.get(`/admin/coupon/list`)
  return data;
};

// 데이터 입력
export const setUser = async (user: IUser) => {
  const { data } = await clientApi.post(`/user`, user)
  return data;
};
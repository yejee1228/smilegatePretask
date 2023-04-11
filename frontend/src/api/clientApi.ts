import axios from "axios";
import { IUser } from "@/types";

const clientApi = axios.create({
  baseURL: 'http://localhost:8080',
});

//user list
export const getCouponList = async ({ userName, userPhone }: { userName: string | null, userPhone: string | null }) => {
  const url = userName !== '' ? `/admin/coupon/list?userName=${userName}` : userPhone !== '' ? `/admin/coupon/list?userPhone=${userPhone}` : `/admin/coupon/list`
  const { data } = await clientApi.get(url)
  return data;
};

// 데이터 입력
export const setUser = async (user: IUser) => {
  const { data } = await clientApi.post(`/user`, user)
  return data;
};
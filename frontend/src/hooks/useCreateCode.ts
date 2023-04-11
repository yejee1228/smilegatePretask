import { useState } from 'react'
import { RootState } from '@/store/modules';
import { createCouponCode } from '../store/modules/user.module';
import { useDispatch, useSelector } from 'react-redux';
import * as API from '../api/queries'

export const useCreateCode = (codeLength: number) => {
    const dispatch = useDispatch()
    const [couponCode, setCouponCode] = useState<string>('');
    dispatch(createCouponCode(codeLength));
    /* const couponCodeState = useSelector((state: RootState) => state.user.couponCode)
    console.log(couponCodeState)
    console.log(couponCode)
    setCouponCode(couponCodeState ? couponCodeState : '');
    const { data } = API.useIsCodeExist(couponCode)
    while (data) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCreateCode(codeLength)
    }
    console.log('data', data) */
    /*  return data ? data : '' */
};
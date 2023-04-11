import React from 'react';
import * as A from '../styles/adminStyle'
import * as C from '../styles/commonStyle'
import Coupon from './Coupon';
import { useGetCouponList } from '@/api/queries';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/store/modules/admin.module';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/modules';

const CouponList = () => {
    const dispatch = useDispatch()
    const { data } = useGetCouponList()
    dispatch(setUsers(data))
    const users = useSelector((state: RootState) => state.admin.users)

    return (
        <>
            <A.AdminWrap>
                <C.SubTitleBox>
                    <C.SubTitle>
                        쿠폰발급 리스트
                    </C.SubTitle>
                </C.SubTitleBox>
                <A.AdminContent>
                    <Coupon key={'header'} user={{ couponSeq: '번호', userName: '이름', userPhone: '휴대폰번호', couponCode: '쿠폰번호', instDate: '발급일자' }} dataType='header' />
                    {users && users.map((item, index) => {
                        return (<Coupon key={index} user={item} dataType={'data'} />)
                    })}
                </A.AdminContent>
            </A.AdminWrap>
        </>
    );
};

export default CouponList;
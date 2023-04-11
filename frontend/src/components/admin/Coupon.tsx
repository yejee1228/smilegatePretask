import React from 'react';
import * as A from '../styles/adminStyle'
import { IUserForList } from '@/types';

const Coupon = ({ index, user, dataType }: { index: string | number, user: IUserForList, dataType: string }) => {
    const instDate = dataType === 'data' ? new Date(user.instDate) : user.instDate
    const dateToString = (date: Date) => {
        if (!date) return ''
        if (typeof date === 'string') return date
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()

        const stringMonth = month < 10 ? '0' + month : month
        const stringDay = day < 10 ? '0' + day : day
        const stringHour = hour < 10 ? '0' + hour : hour
        const stringMinute = minute < 10 ? '0' + minute : minute
        const stringSecond = second < 10 ? '0' + second : second
        return `${year}-${stringMonth}-${stringDay} ${stringHour}:${stringMinute}:${stringSecond}`
    }
    return (
        <A.CouponItem header={dataType === 'header'}>
            <A.CouponInfoDiv width={'50px'}>
                {index}
            </A.CouponInfoDiv>
            <A.CouponInfoDiv width={'150px'}>
                {'' + user.userName}
            </A.CouponInfoDiv>
            <A.CouponInfoDiv width={'150px'}>
                {'' + user.userPhone}
            </A.CouponInfoDiv>
            <A.CouponInfoDiv width={'200px'}>
                {'' + user.couponCode}
            </A.CouponInfoDiv>
            <A.CouponInfoDiv width={'200px'}>
                {typeof instDate === 'string' ? user.instDate : dateToString(instDate)}
            </A.CouponInfoDiv>
        </A.CouponItem>
    );
};

export default Coupon;
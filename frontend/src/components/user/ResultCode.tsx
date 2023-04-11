import React, { useEffect } from 'react';
import * as U from '../styles/userStyle';
import * as C from '../styles/commonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/modules';
import { useRouter } from 'next/router';

const ResultCode = () => {
    const router = useRouter();
    const userState = useSelector((state: RootState) => state.user.user)
    const user = userState ? userState : null

    const copyCode = () => {
        const dummy = document.createElement("input")
        document.body.appendChild(dummy)
        dummy.value = user && user.couponCode ? user.couponCode : ''
        dummy.select()
        document.execCommand("copy")
    }

    useEffect(() => {
        if (!user) {
            alert('정보가 없습니다.')
            router.push('/user')
        }
    }, [])

    return (
        <U.UserWrap>
            <C.SubTitleBox>
                <C.SubTitle>
                    {(user && user.userName) && user.userName + ' 님의 쿠폰 번호입니다.'}
                </C.SubTitle>
            </C.SubTitleBox>
            <U.UserContent>
                <U.ContentText id='couponCode'>{(user && user.couponCode) && user.couponCode}</U.ContentText>
            </U.UserContent>
            <C.RedButton onClick={copyCode}><C.ButtonSpan>쿠폰코드 복사하기</C.ButtonSpan> </C.RedButton>
            <U.GrayButton onClick={() => router.push('/user')}><C.ButtonSpan>쿠폰발급페이지로 돌아가기</C.ButtonSpan> </U.GrayButton>
        </U.UserWrap >
    );
};

export default ResultCode;
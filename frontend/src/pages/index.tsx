import React from 'react';
import { useRouter } from 'next/router';
import * as C from '@/components/styles/commonStyle';

const Index = () => {
    const router = useRouter()
    return (
        <C.ContentWrap>
            <C.RedButton onClick={() => router.push('/user')}>
                <C.ButtonSpan>
                    쿠폰발급 페이지 바로가기
                </C.ButtonSpan>
            </C.RedButton>
            <C.RedButton onClick={() => router.push('/admin')}>
                <C.ButtonSpan>
                    관리자페이지 바로가기
                </C.ButtonSpan>
            </C.RedButton>
        </C.ContentWrap>
    );
};

export default Index;
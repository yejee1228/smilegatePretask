import React, { useState, useEffect } from 'react';
import * as A from '../styles/adminStyle'
import * as C from '../styles/commonStyle'
import Coupon from './Coupon';
import { useGetCouponList } from '@/api/queries';
import { useDispatch } from 'react-redux';
import { setUsers } from '@/store/modules/admin.module';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/modules';
import usePagination from '@/hooks/usePagination';
import Pagination from './Pagination';

const CouponList = () => {
    const dispatch = useDispatch()
    const [searchUserName, setSearchUserName] = useState('')
    const [searchUserPhone, setSearchUserPhone] = useState('')
    const [searchType, setSearchType] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const { data, refetch } = useGetCouponList({ userName: searchUserName, userPhone: searchUserPhone })

    const users = useSelector((state: RootState) => state.admin.users)
    const { currentPage, totalPages, currentItems, goToPage } = usePagination(users, 10)

    useEffect(() => {
        dispatch(setUsers(data))
        refetch()
    }, [dispatch, refetch, data, searchUserName, searchUserPhone])

    const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setSearchType(value)
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearchValue(value)
    }
    const search = () => {
        if (searchType === 'name') {
            setSearchUserName(searchValue)
            setSearchUserPhone('')
        } else if (searchType === 'phone') {
            setSearchUserPhone(searchValue)
            setSearchUserName('')
        } else {
            setSearchUserPhone('')
            setSearchUserName('')
        }
    }

    return (
        <>
            <A.AdminWrap>
                <C.SubTitleBox>
                    <C.SubTitle>
                        쿠폰발급 리스트
                    </C.SubTitle>
                </C.SubTitleBox>
                <A.SearchBox>
                    <A.SelectBox name='searchType' onChange={handlerSelect}>
                        <A.Option>선택</A.Option>
                        <A.Option value={'name'}>이름</A.Option>
                        <A.Option value={'phone'}>휴대폰번호</A.Option>
                    </A.SelectBox>
                    <A.SearchInput name='searchValue' onChange={handleInput} />
                    <A.SearchButton onClick={search}>
                        <C.ButtonSpan>
                            조회
                        </C.ButtonSpan>
                    </A.SearchButton>
                </A.SearchBox>
                <A.AdminContent>
                    <Coupon key={'header'} index={'번호'} user={{ couponSeq: '', userName: '이름', userPhone: '휴대폰번호', couponCode: '쿠폰번호', instDate: '발급일자' }} dataType='header' />
                    {currentItems && currentItems.map((item, index) => {
                        return (<Coupon key={index} index={index + 1} user={item} dataType={'data'} />)
                    })}
                </A.AdminContent>
                <A.Pagination>
                    <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
                </A.Pagination>
            </A.AdminWrap>
        </>
    );
};

export default CouponList;
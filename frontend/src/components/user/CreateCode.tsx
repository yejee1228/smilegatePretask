import React, { useState, useEffect } from 'react';
import * as U from '../styles/userStyle';
import * as C from '../styles/commonStyle';
import { MdCancel } from 'react-icons/md';
import * as regExp from '../../hooks/useRegExp'
import { useDispatch } from 'react-redux';
import { setInitialState, setUser } from '@/store/modules/user.module';
import { useSetUser } from '@/api/queries';
import { useRouter } from 'next/router';

const CreateCode = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { mutateAsync } = useSetUser()
    const [inputs, setInputs] = useState({
        userName: '',
        userPhone: ''
    })
    const { userName, userPhone } = inputs
    const [userNameError, setuserNameError] = useState(false)
    const [userPhoneError, setuserPhoneError] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const errorStyle = { border: 'solid 1px #ff0000', backgroundColor: '#ffe2e2' }

    useEffect(() => {
        dispatch(setInitialState());
    }, [dispatch])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        let processedValue = value
        // validation 체크
        if (name === 'userName') {
            if (value !== '' && !regExp.checkRegExp(value, regExp.userNameRegExp)) {
                setuserNameError(true)
                return
            }
        } else if (name === 'userPhone') {
            if (value !== '' && !regExp.checkRegExp(value, regExp.phoneRegExp)) {
                setuserPhoneError(true)
                return
            } else if (value.length > 11) {
                setuserPhoneError(true)
                processedValue = value.slice(0, 11)
            }
        }

        setInputs({
            ...inputs,
            [name]: processedValue
        })
        setuserNameError(false)
        setuserPhoneError(false)
    }

    const doSubmit = async () => {

        setuserNameError(false)
        setuserPhoneError(false)
        if (userName == '') {
            setSubmitError('이름을 입력해주세요.')
            return;
        } else if (userPhone == '') {
            setSubmitError('핸드폰 번호를 입력해주세요.')
            return;
        } else {
            const data = await mutateAsync({ userName, userPhone, couponCode: '' })
            if (data.saved) {
                alert('이미 쿠폰이 발급된 휴대폰번호입니다.')
            } else {
                dispatch(setUser({ user: data.user, saved: data.saved }))
                router.push('/user/result')
            }
        }
    }

    return (
        <>
            <U.UserWrap>
                <C.SubTitleBox>
                    <C.SubTitle>
                        이름과 핸드폰번호를 입력하고 사전 예약 쿠폰을 발급받으세요
                    </C.SubTitle>
                </C.SubTitleBox>
                <U.UserContent>
                    <U.InputBox>
                        <U.Input type='text' name='userName' value={userName} placeholder='이름' onChange={handleInput} style={userNameError ? errorStyle : {}} />
                        <U.InputIcon onClick={() => setInputs({ ...inputs, userName: '' })}><MdCancel /></U.InputIcon>
                        {userNameError && <U.Error>{userNameError}</U.Error>}
                    </U.InputBox>
                    <U.InputBox>
                        <U.Input type='text' name='userPhone' value={userPhone} placeholder={`휴대폰번호('-'제외)`} onChange={handleInput} style={userPhoneError ? errorStyle : {}} />
                        <U.InputIcon onClick={() => setInputs({ ...inputs, userPhone: '' })}><MdCancel /></U.InputIcon>
                        {userPhoneError && <U.Error>{userPhoneError}</U.Error>}
                    </U.InputBox>
                </U.UserContent>
                <C.RedButton onClick={doSubmit}>
                    <C.ButtonSpan>쿠폰 발급</C.ButtonSpan>
                </C.RedButton>
                {submitError !== '' && <U.Error>{submitError}</U.Error>}
            </U.UserWrap>
        </>
    );
};

export default CreateCode;
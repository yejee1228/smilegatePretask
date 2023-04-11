import styled from 'styled-components'
import { RedButton } from './commonStyle'

export const UserWrap = styled.div`
width: 500px;
height: 100%;
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const UserContent = styled.div`
width: 320px;
margin: 0 auto;
margin-top: 24px;
margin-bottom: 16px;
`
export const ContentText = styled.p`
font-size: 30px;
font-weight: 700;
text-align: center;
`
export const InputWrap = styled.div`
margin: 40px 0 24.5px; 
position: relative;
`
export const InputBox = styled.div`
position: relative;
margin: 0 0 8px;
`
export const Input = styled.input`
width: 100%;
height: 48px;
padding: 15px 12px;
border-radius: 6px;
border: solid 1px #ababab;
`
export const InputIcon = styled.div`
width: 18px;
height: 18px;
position: absolute;
color: #cccccc;
right: 12px;
top: 15px;
`
export const Error = styled.span`
font-family: NotoSans;
font-size: 12px;
color: #ff0000;
margin: 4px 24px 0 4px;
`
export const GrayButton = styled(RedButton)`
background-color: #c3c3c3;
`
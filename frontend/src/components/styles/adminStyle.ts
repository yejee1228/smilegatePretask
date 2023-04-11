import styled from 'styled-components'
import { RedButton } from './commonStyle'

export const AdminWrap = styled.div`
width: 80%;
height: 100%;
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const SearchBox = styled.div`
width: 100%;
position: relative;
margin: 0 0 8px;
display: flex;
padding: 20px 0;
align-items: center;
`
export const SelectBox = styled.select`
width: 20%;
height: 48px;
padding: 15px 12px;
border-radius: 6px;
border: solid 1px #ababab;
`
export const Option = styled.option`

`
export const SearchInput = styled.input`
width: 70%;
height: 48px;
padding: 15px 12px;
margin: 0 5px;
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
export const SearchButton = styled(RedButton)`
width: 90px;
height:40px;
padding: 9px 0;
margin: 0 auto;
`
export const AdminContent = styled.div`
width: auto;
height: 350px;
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
export const CouponItem = styled.div<{ header: boolean }>`
width: auto;
height: 30px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
border-bottom: ${({ header }) => header && '2px solid black'};
margin-bottom: ${({ header }) => header && '10px'};
`
export const CouponInfoDiv = styled.div<{ width: string }>`
width: ${({ width }) => width};
display: flex;
justify-content: center;
`
export const Pagination = styled.div`
position: relative;
display: flex;
justify-content: center;
`
export const PageButton = styled.button`
width: 40px;
height: 40px;
border: none;
background-color: #fff;
margin-left: 1px;
`
import styled from 'styled-components'

export const AdminWrap = styled.div`
width: 80%;
height: 100%;
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const SubTitleBox = styled.div`
margin-bottom: 24px;
text-align: center;
position: relative;
`
export const SubTitle = styled.p`
margin-bottom:4px;
font-family: NotoSans;
font-size: 18px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.45px;
color: #222;
`
export const AdminContent = styled.div`
width: auto;
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
export const CouponItem = styled.div`
width: auto;
height: 30px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
export const CouponInfoDiv = styled.div<{ width: string }>`
width: ${({ width }) => width};
display: flex;
`
export const RedButton = styled.div`
width: 320px;
height: 48px;
margin: 0 auto;
margin-bottom: 18px;
padding: 14px 0;
border-radius: 25px;
background-color: #f96726;
text-align: center;
cursor: pointer;
`
export const ButtonSpan = styled.span`
color: #ffffff;
font-size: 16px;
`
export const GrayButton = styled(RedButton)`
background-color: #c3c3c3;
`
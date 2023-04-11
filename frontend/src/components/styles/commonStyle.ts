import styled from "styled-components";

/* header */
export const HeaderBox = styled.div`
width: 100%; 
height: 56px; 
margin: 0 0 40px; 
padding: 14px 0; 
box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16); 
position: relative; 
text-align: left;
`
export const HeaderTitle = styled.span`
width: 82px;
height: 22px;
padding-left: 20px;
font-family: NotoSans;
font-size: 20px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.38;
letter-spacing: -0.4px;
text-align: left;
color: #222;
`
export const MainPageButton = styled.button`
width: 70px;
height: 28px;
position: absolute;
right: 0px;
transform: translate(-50%);
background-color: #f96726;
border-radius: 5px;
text-align: center;
border: none;
color: #ffffff;
font-size: 13px;
font-weight: 500
`
export const ContentBox = styled.div`
position: relative;
`
export const ContentWrap = styled.div`
width: 300px;
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
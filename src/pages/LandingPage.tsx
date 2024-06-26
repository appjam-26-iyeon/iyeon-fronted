import styled from "styled-components";
import { Logo } from "../assets/indes";
import "../Fonts/Font.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Logopicture src={Logo} />
            <Gap2 />
            <Servicename>
                <Leaderspan>커플 달력</Leaderspan>
                <Memberspan> 너와 나</Memberspan>
            </Servicename>
            <Gap />
            <Description>
                <Neighborspan>서로의 일정을 공유하고</Neighborspan>
                <Neighborspan>추억을 쌓아보세요!</Neighborspan>
            </Description>
            <Gap3 />
            <Footer>
                <Buttons>
                    <Loginbutton onClick={() => {navigate("/login")}}>로그인</Loginbutton>
                </Buttons>
                <Firstbar>
                    <Bar />
                    <First>처음이라면?</First>
                    <Bar />
                </Firstbar>
                <Signin onClick={() => {navigate("/signup")}}>회원가입</Signin>
            </Footer>
        </>
    )
}

const Logopicture = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;
`

const Leaderspan = styled.span`
    font-family: KyoboHandwriting2023wsa;
    color: #FFC3C3;
    font-size: 8vw;
`

const Memberspan = styled.span`
    font-family: KyoboHandwriting2023wsa;
    color: black;
    font-size: 8vw;
`

const Servicename = styled.span`
    margin-bottom: 20vh;
`

const Neighborspan = styled.span`
    font-family: KyoboHandwriting2023wsa;
    color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const First = styled.span`
    font-family: Pretendard-Regular;
    color: #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Bar = styled.div`
    background-color: #D9D9D9;
    height: 0.5px;
    width: 32vw;
`

const Firstbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
    width: 90vw;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Gap = styled.div`
    height: 10px;
`

const Gap2 = styled.div`
    height: 50px;
`

const Gap3 = styled.div`
    height: 210px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`

const Loginbutton = styled.button`
    width: 90vw;
    height: 8vh;
    background-color: #FF9393;
    color: white;
    border-radius: 20px;
    border: 0.1px solid #FF9393;
    font-weight: bold;
    font-size: 5vw;

`

const Signin = styled.span`
    font-size: 5vw;
    font-weight: bold;
    color: #FF9393;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

export default LandingPage;

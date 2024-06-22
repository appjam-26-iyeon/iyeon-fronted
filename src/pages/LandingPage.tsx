import styled from "styled-components";
import { Logo } from "../assets/indes";
import "../Fonts/Font.css";
const Logopicture = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20vh;
`

const Leaderspan = styled.span`
    font-family: KyoboHandwriting2023wsa;
    color: #FFC3C3;
`

const Memberspan = styled.span`
    font-family: KyoboHandwriting2023wsa;
    color: black;
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
    height: 2px;
    width: 27vw;
`

const Firstbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;

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
    height: 250px;
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



const LandingPage = () => {
    return (
        <>
        <Logopicture src={Logo} />
        <Servicename>
            <Leaderspan>커플 달력</Leaderspan>
            <Memberspan> 너와 나</Memberspan>
        </Servicename>

        <Gap />
        
        <Description>
            <Neighborspan>서로의 일정을 공유하고</Neighborspan>
            <Neighborspan>추억을 쌓아보세요!</Neighborspan>
        </Description>

        <Gap2 />

        <Buttons>
            <Loginbutton>로그인</Loginbutton>
        </Buttons>

        <Gap />

        <Firstbar>
            <Bar />
            <First>처음이라면?</First>
            <Bar />
        </Firstbar>

        <Gap />
            <Signin>회원가입</Signin>
        </>
    )
}



export default LandingPage;

import styled from "styled-components";
import { BackBtn } from "../assets/indes";

const SignupPage = () => {
    return (
        <Container>
            <BackTextWrapper>
                <BackButton src={BackBtn}></BackButton>돌아가기
            </BackTextWrapper>
            <SignupText>회원가입</SignupText>
            <InputWrapper>
                <Input placeholder="이름" />
                <Input placeholder="이메일" />
                <Input placeholder="비밀번호" type="password" />
                <Input placeholder="성별" />
            </InputWrapper>
            <SignBtn>회원가입</SignBtn>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const BackTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard-Regular;
    font-size: 20px;
    color: #FF9393;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 7vw;
`

const BackButton = styled.img`
    width: 5vw;
    height: 2vh;
`

const SignupText = styled.div`
    font-family: Pretendard-Regular;
    color: black;
    font-size: 8vw;
    width: 120px;
    height: 40px;
    margin-top: 10vh;
    margin-right: 55vw;
    font-weight: 600;`


const InputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 48px;
gap: 36px;

`

const Input = styled.input`
width: 328px;
height: 61px;
border-radius: 10px;
background-color: #F2F2F4;
border: none;
padding-left: 18px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 3vw;
gap: 36px;
font-family: Pretendard-extralight;
font-weight: 200;
font-size: 5vw;
`

const SignBtn = styled.div`
width: 312px;
height: 55px;
border-radius: 10px;
cursor: pointer;
background-color: #FF9393;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin-top: 25vh;
font-family: Pretendard-regular;
font-family: 600;
font-size: 4vw;
`

export default SignupPage;
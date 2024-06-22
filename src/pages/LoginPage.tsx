import styled from "styled-components";
import { BackBtn } from "../assets/indes";

const LoginPage = () => {
    return (
        <Container>
            <BackTextWrapper>
                <BackButton src={BackBtn}></BackButton>돌아가기
            </BackTextWrapper>
            <LoginText>로그인</LoginText>
            <InputWrapper>
                <Input placeholder="이메일"></Input>
                <Input placeholder="비밀번호"></Input>
            </InputWrapper>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

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

const LoginText = styled.span`
    font-family: Pretendard-Regular;
    color: black;
    font-size: 8vw;
    width: 100px;
    height: 40px;
    margin-top: 10vh;
    margin-left: 3.3vw;
    font-weight: 600;
`

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
`

const LoginBtn = styled.div`
    width: 312px;
    height: 55px;
    text-align: center;
    border-radius: 10px;
`

export default LoginPage
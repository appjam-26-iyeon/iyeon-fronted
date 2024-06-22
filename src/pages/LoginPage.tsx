import styled from "styled-components";
import { BackBtn } from "../assets/indes";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <BackTextWrapper>
                <BackButton src={BackBtn} onClick={() => {navigate("/landing")}}></BackButton>돌아가기
            </BackTextWrapper>
            <LoginText>로그인</LoginText>
            <InputWrapper>
                <Input placeholder="이메일"></Input>
                <Input placeholder="비밀번호" type="password"></Input>
            </InputWrapper>
            <LoginBtn>로그인</LoginBtn>
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
    font-family: Pretendard-extralight;
    font-weight: 200;
    font-size: 5vw;
`

const LoginBtn = styled.div`
    width: 312px;
    height: 55px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #FF9393;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45vh;
    margin-left: 7vw;
    font-family: Pretendard-regular;
    font-family: 600;
    font-size: 4vw;
`

export default LoginPage
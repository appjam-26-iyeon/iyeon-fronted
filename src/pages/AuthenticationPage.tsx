import styled from "styled-components";
import { Leftarrow } from "../assets/indes";
import "../Fonts/Font.css";

const AuthenticationPage = () => {
    return(
        <>
            <Leftarrowimg src={Leftarrow} />
            <Getout>돌아가기</Getout>

            <Gap1 />

            <Titlecontainer>
                <Title>커플 맺기</Title>
            </Titlecontainer>

            <Gap1 />

            <AuthenticationInputContainer>
                <AuthenticationNumber placeholder="인증 코드" />
            </AuthenticationInputContainer>

            <Gap2 />

            <AuthenticationNumberCreate>인증 코드 생성하기</AuthenticationNumberCreate>

            <Gap3 />

            <Buttons>
                <Nextbutton>커플 맺기</Nextbutton>
            </Buttons>


        </>
    );
}

const Leftarrowimg = styled.img`
    display: block;
    margin-right: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    padding: 10px;
`

const Getout = styled.span`
    color: #FF9393;
    display: block;
    margin-right: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    padding-left: 40px;
    padding-top: 18px;
`

const Titlecontainer = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 20px;
`

const Title = styled.span`
    color: black;
    font-weight: 600;
    font-size: 7vw;
`

const AuthenticationInputContainer = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 20px;

`

const AuthenticationNumber = styled.input`
        padding-left: 20px;
    &::placeholder {
        color: #656565;
        font-weight: bold;
        align-items: center;
        vertical-align: center;
    }

    background-color: #F2F2F4;
    border-radius: 10px;
    height: 7vh;
    width: 90%;
    border: none;
`;

const AuthenticationNumberCreate = styled.span`
    color: #9C9C9C;
    padding-left: 170px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`

const Nextbutton = styled.button`
    width: 90vw;
    height: 8vh;
    background-color: #FF9393;
    color: white;
    border-radius: 10px;
    border: 0.1px solid #FF9393;
    font-weight: bold;
    font-size: 5vw;

`

const Gap1 = styled.div`
    height: 50px;
`

const Gap2 = styled.div`
    height: 10px;
`

const Gap3 = styled.div`
    height: 500px;
`

export default AuthenticationPage;
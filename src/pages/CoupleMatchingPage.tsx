import styled from "styled-components";
import { Heart } from "../assets/indes";
import "../Fonts/Font.css";

const CoupleMatchingPage = () => {
    return(
        <>
            <Heartimg src={Heart} />
            <Gap />
            <Couplespan>커플</Couplespan>
            <Couplerightspan>로 설정이 완료되었습니다.</Couplerightspan>

            <Gap2 />
            <Coupledecidrightespan>당신의 </Coupledecidrightespan>
            <Coupledecidespan>연인</Coupledecidespan>
            <Coupledecidrightespan>은 ▭▭▭님 입니다.</Coupledecidrightespan>

            <Gap3 />

            <Buttons>
                <Nextbutton>다음</Nextbutton>
            </Buttons>
        </>
    );
}

const Heartimg = styled.img`
    align-items: center;
    margin-top: 10vh;
`

const Couplespan = styled.span`
    color: #FF9393;
    font-family: Pretendard-Regular;
`

const Couplerightspan = styled.span`
    color: #000000;
    font-family: Pretendard-Regular;
`

const Coupledecidespan = styled.span`
    color: #FF9393;
    font-family: Pretendard-Regular;
    font-size: 5vw;
`

const Coupledecidrightespan = styled.span`
    color: #000000;
    font-family: Pretendard-Regular;
    font-size: 5vw;
`

const Gap = styled.div`
    height: 30px;
`

const Gap2 = styled.div`
    height: 10px;
`

const Gap3 = styled.div`
    height: 300px;
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

export default CoupleMatchingPage;
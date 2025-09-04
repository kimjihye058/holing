import styled from "styled-components";

function Section1() {
  return (
    <First>
      <FirstLeft>
        <Title>스스로 학습하는 수학 공부 앱</Title>
        <Brand>홀링</Brand>
        <Desc>
          동영상 강의, 문제풀이, 오답학습까지
          <br /> 혼자서도 알차고 탄탄하게 공부해요
        </Desc>
        <TryButton href="">무료체험 시작하기</TryButton>
      </FirstLeft>
      <FirstRight>
        <img
          src="/assets/images/main/scroll.svg"
          alt=""
          height={516}
          style={{ position: "relative" }}
        />
        <CloudTextWrapper>
          <img src="/assets/images/main/tablet.svg" alt="" />
          <GraySpan style={{ textAlign: "center" }}>
            홀링 앱은 <GreenSpan>태블릿, 스마트폰</GreenSpan> 에서 <br />
            다운로드 및 이용 가능
          </GraySpan>
        </CloudTextWrapper>
      </FirstRight>
    </First>
  );
}
export default Section1;

export const First = styled.div`
  display: flex;
  flex-direction: row;
  gap: 170px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  padding: calc(-415px + 50vh) 0px;
  position: relative;
  background-image: url(/assets/images/main/bg.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto;
`;

export const Title = styled.span`
  font-family: SUIT;
  font-size: 30px;
  font-weight: 700;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Brand = styled.span`
  font-family: Maplestory;
  font-size: 90px;
  font-weight: 400;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
  -webkit-text-stroke: 2px black;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.span`
  font-size: 24px;
  font-family: SUIT, system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: #757e85;
  display: block;
  margin-top: 28px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TryButton = styled.a`
  display: flex;
  width: 320px;
  height: 88px;
  flex-direction: column;
  box-align: center;
  align-items: center;
  border-radius: 44px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 0px 0px inset;
  cursor: pointer;
  user-select: none;
  color: #fff;
  padding: 18px 48px;
  font-family: Maplestory, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.52px;
  margin: 80px 0px 0px;
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 14px 28px;
  }

  padding-top: 25px;
  gap: 8.723px;
  transition: transform 0.2s ease-in-out;
`;

export const FirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const FirstRight = styled.div`
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
`;
export const GraySpan = styled.span`
  font-family: inherit;
  font-size: 16px;
  font-weight: 300;
  color: rgb(74, 78, 83);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const GreenSpan = styled.span`
  color: #00ab15;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const CloudTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  -webkit-box-align: center;
  align-items: center;
  background-image: url(/assets/images/main/cloud.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 436px;
  height: 114px;
  padding: 35px 28px 35px 49px;
`;

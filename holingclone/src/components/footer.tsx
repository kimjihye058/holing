import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <FlowDiv />
      <FooterDiv>
        <FooterConDiv>
          <RightDiv>
            <Download>
              <a href="https://apps.apple.com/kr/app/%ED%92%80%EB%9E%AD/id6478107698">
                <DownBtnDiv>iOS 앱 다운로드</DownBtnDiv>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.matholic.pullang">
                <DownBtnDiv>Android 앱 다운로드</DownBtnDiv>
              </a>
            </Download>
            <Sns>
              <a href="https://blog.naver.com/ilovematholic">
                <SnsImg src="/assets/images/footer/blog.svg" alt="" />
              </a>
              <a href="https://www.youtube.com/channel/UC0f2occwFdAosou2Ds29AUw">
                <SnsImg src="/assets/images/footer/youtube.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/ilovematholic">
                <SnsImg src="/assets/images/footer/facebook.svg" alt="" />
              </a>
              <a href="https://www.instagram.com/holing_official/">
                <SnsImg src="/assets/images/footer/instagram.svg" alt="" />
              </a>
            </Sns>
          </RightDiv>
        </FooterConDiv>
      </FooterDiv>
    </Foot>
  );
}
export default Footer;

export const Foot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`;

export const FlowDiv = styled.div`
  width: 100%;
  height: 78px;
  background-image: url(/assets/images/footer/flow.svg);
  background-repeat: repeat-x;
  background-position: 0 0;
  background-size: auto 100%;
  animation: flow-left 150s linear infinite;

  @keyframes flow-left {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 0;
    }
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background: #c1e9f8;
`;

export const FooterConDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 384px;
  padding: 40px;
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Download = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DownBtnDiv = styled.div`
  display: flex;
  width: 230px;
  height: 62px;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 6.154px;
  border-radius: 31.043px;
  background: var(--p_green_500_btON, #00ab15);
  box-shadow: rgba(0, 0, 0, 0.12) 0px -8px 0px 0px inset;
  color: rgb(255, 255, 255);
  font-family: Maplestory;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

export const Sns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SnsImg = styled.img`
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out;
`;

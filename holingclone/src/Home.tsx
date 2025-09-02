import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  background: white;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgb(230, 231, 234);
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ImgLogo = styled.img`
  width: 60px;
  margin-right: 20px;
`;

const ADownload = styled.a`
    display: flex;
    height: 30px;
    padding: 8px 30px 0px;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 20px;
    background: rgb(0, 171, 21);
    box-shadow: rgba(0, 0, 0, 0.12) 0px -5px 0px 0px inset;
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    user-select: none;
    transition: transform 0.2s ease-in-out;
`;

const ALogin = styled.a`
  color: #000000;
  border: none;
  font-size: 16px;
`;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    -webkit-box-align: center;
    align-items: center;
`;

const Main = styled.div`
    margin-top: 80px;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`;

const First = styled.div`
    display: flex;
    flex-direction: row;
    gap: 170px;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    background: url(/assets/images/bg.png);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto;
    padding-top: calc(-415px + 50vh);
    padding-right: 0px;
    padding-bottom: calc(-415px + 52vh);
    padding-left: 0px;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 400;
  display: block;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Brand = styled.span`
  font-size: 90px;
  font-weight: 700;
  display: block;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.span`
  font-size:24px;
  color: #757E85;
  display: block;
  margin-top: 28px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TryButton = styled.a`
    display: flex;
    width: 200px;
    height: 50px;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 44px;
    background: var(--p_green_500_btON, #00AB15);
    box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 0px 0px inset;
    cursor: pointer;
    user-select: none;
    color: #fff;
    padding: 18px 48px;

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
`;

const FirstLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const FirstRight = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`;

const GreenSpan = styled.span`
  color: #00AB15;
  font-weight: 700;
`;

const CloudTextWrapper = styled.div`
  position: relative;
  display: flex;             
  align-items: center;      
  justify-content: center; 
  text-align: center;
  color: #000;
  min-width: 260px;
  min-height: 80px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 436px;
    height: 114px;
    background: url('/assets/images/cloud.svg') no-repeat center/contain;
    transform: translate(-50%, -50%);
    z-index: 0;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;  
`;

const BannerImgBox = styled.div`
  cursor: pointer;
  z-index: 2;
  width: 100%;
  background-image: linear-gradient(90deg, rgb(65, 129, 248) 50%, rgb(34, 201, 247) 50%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin: 0 auto;
    display: block;
    height: 120px;
    width: auto;
  }
`;

function Home () {
    return (
        <div>
            <Nav>
                <WrapperContainer>
                    <LogoDiv>
                        <a>
                            <ImgLogo src="/assets/images/favicon.svg" alt='logo' />
                        </a>
                    </LogoDiv>
                    <ButtonDiv>
                            <ADownload
                                href='https://apps.apple.com/kr/app/%ED%99%80%EB%A7%81-%EC%88%98%ED%95%99%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%95%B1/id6478107698'
                                target='_blank'
                                rel='noreferrer'
                            >   
                                앱 다운로드
                            </ADownload>
                            <ALogin>로그인</ALogin>
                    </ButtonDiv>
                </WrapperContainer>
            </Nav>
            <Main>
                <First>
                    <FirstLeft>
                        <Title>스스로 학습하는 수학 공부 앱</Title>
                        <Brand>홀링</Brand>
                        <Desc>동영상 강의, 문제풀이, 오답학습까지<br/> 혼자서도 알차고 탄탄하게 공부해요</Desc>
                        <TryButton href="">무료체험 시작하기</TryButton>
                    </FirstLeft>
                    <FirstRight>
                        <img src="/assets/images/scroll.svg" alt="" />
                        <CloudTextWrapper>
                            <img src="/assets/images/tablet.svg" alt="" />
                            <span style={{ fontSize: 16 }}>
                                홀링 앱은 <GreenSpan>태블릿, 스마트폰</GreenSpan>에서 <br />
                                다운로드 및 이용 가능
                            </span>
                        </CloudTextWrapper>
                    </FirstRight>
                </First>
                <Banner>
                  <BannerImgBox>
                    <img src="/assets/images/banner_invite.png" alt="" />
                  </BannerImgBox>
                  <BannerImgBox>
                    <img src="/assets/images/banner_brand.png" alt="" />
                  </BannerImgBox>
                </Banner>
            </Main>
        </div>
    )
}
export default Home
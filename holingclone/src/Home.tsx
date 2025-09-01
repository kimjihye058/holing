import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  background: white;
  width: 100%;
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
  height: 40px;
  padding: 13px 30px 0px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 40px;
  background: #00AB15;
  color: #FFFFFF;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
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
  width: 100%;
    max-width: 1280px;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    min-height: 80px;
    padding: 0px 40px;
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Main = styled.div`
  margin-top: 88px;
  min-height: 100vh;
  width: 100vw;
  background: #C6EBFF url(/assets/images/bg.png) no-repeat center top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const First = styled.div`
  display: flex;
  flex-direction: row;
  gap: 170px;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 880px;
  max-width: 100vw;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 400;
  display: block;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Brand = styled.span`
  font-size: 90px;
  font-weight: 700;
  display: block;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.span`
  font-size:24px;
  color: #757E85;
  display: block;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TryButton = styled.a`
  display: inline-block;
  background: #00AB15;
  color: #fff;
  border-radius: 40px;
  padding: 18px 48px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  text-decoration: none;

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
  margin-top: 16px;
  color: #000;
  min-width: 260px;
  min-height: 80px;
  gap: 10px;                   

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

function Home () {

    return (
        <div>
            <Nav>
                <WrapperContainer>
                    <NavInner>
                        <a>
                            <ImgLogo src="/assets/images/favicon.svg" alt='logo' />
                        </a>
                        <ADownload>앱 다운로드</ADownload>
                        <ALogin>로그인</ALogin>
                    </NavInner>
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
                    <div>
                        <img src="/assets/images/scroll.svg" />
                        <CloudTextWrapper>
                            <img src="/assets/images/tablet.svg" alt="" />
                            <span style={{ fontSize: 16 }}>
                                홀링 앱은 <GreenSpan>태블릿, 스마트폰</GreenSpan>에서 <br />
                                다운로드 및 이용 가능
                            </span>
                        </CloudTextWrapper>
                    
                    </div>
                </First>
            </Main>
        </div>
    )

}
export default Home
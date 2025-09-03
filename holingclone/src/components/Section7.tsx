import styled from "styled-components";

function Section7() {
  return (
    <Seventh>
      <SeventhDiv>
        <Span>
          매쓰홀릭의 다양한
          <br />
          수학 서비스를 만나보세요
        </Span>
        <Services>
          <Service>
            <ServiceImgDiv>
              <img src="/assets/images/services/service_01" alt="" />
            </ServiceImgDiv>
            <ServiceDescDiv>
              <ServiceTitleDiv>
                <ServiceTitleSpan>매쓰홀릭</ServiceTitleSpan>
                <img src="/assets/images/services/title_sep" alt="" />
                <ServiceTitleSpan>매쓰홀릭T</ServiceTitleSpan>
              </ServiceTitleDiv>
              <ServiceWhen>
                학원, 학교에서 학생들의 학습을 분석하고 관리할 때
              </ServiceWhen>
              <ServiceDescSpan>
                교과서, 참고서의 유사 문제를 만들고 학생별 취약유형을 분석해
                맞춤 학습을 진행하세요.
              </ServiceDescSpan>
              <Advantages>
                <img src="/assets/images/services/school.svg" alt="" />
                <img src="/assets/images/services/b2b.svg" alt="" />
              </Advantages>
              <ButtonsDiv>
                <Button href="https://www.matholic.com/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                    <br />
                    <ButtonSpan2>(학원용 매쓰홀릭)</ButtonSpan2>
                  </ButtonSpans>
                  <img src="/assets/images/services/link.svg" alt="" />
                </Button>
                <Button href="https://school.matholic.com/">
                  <ButtonSpans>
                    <ButtonSpan1>바로가기</ButtonSpan1>
                    <br />
                    <ButtonSpan2>(학교용 매쓰홀릭T)</ButtonSpan2>
                  </ButtonSpans>
                  <img src="/assets/images/services/link.svg" alt="" />
                </Button>
              </ButtonsDiv>
            </ServiceDescDiv>
          </Service>
        </Services>
      </SeventhDiv>
    </Seventh>
  );
}
export default Section7;

export const Seventh = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: rgb(223, 245, 254);
`;

export const SeventhDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: white;
  padding: 100px 0px;
`;

export const Span = styled.span`
  width: unset;
  white-space: normal;
  color: rgb(37, 37, 37);
  text-align: center;
  font-family: Maplestory;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Services = styled.div``;

export const Service = styled.div``;

export const ServiceImgDiv = styled.div``;

export const ServiceDescDiv = styled.div``;

export const ServiceTitleDiv = styled.div``;

export const ServiceTitleSpan = styled.span``;

export const ServiceWhen = styled.span``;

export const ServiceDescSpan = styled.span``;

export const Advantages = styled.div``;

export const ButtonsDiv = styled.div``;

export const Button = styled.a``;

export const ButtonSpans = styled.span``;

export const ButtonSpan1 = styled.span``;

export const ButtonSpan2 = styled.span``;

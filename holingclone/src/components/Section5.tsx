import styled from "styled-components";

function Section5() {
  return (
    <Fifth>
      <Span1>
        <Span2>학부모</Span2>가 이야기하는 홀링
      </Span1>
      <Cards>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img src="/assets/images/parents/card1.png" alt="" />
              <img src="/assets/images/parents/quote.svg" alt="" />
            </ImgDiv>
            <ConSpan1></ConSpan1>
            <HumanDiv>
              <NameSpan></NameSpan>
              <ParentDiv></ParentDiv>
              <ParentSpan></ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan2></ConSpan2>
        </CardDiv>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img src="/assets/images/parents/card2.png" alt="" />
              <img src="/assets/images/parents/quote.svg" alt="" />
            </ImgDiv>
            <ConSpan1></ConSpan1>
            <HumanDiv>
              <NameSpan></NameSpan>
              <ParentDiv></ParentDiv>
              <ParentSpan></ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan2></ConSpan2>
        </CardDiv>
        <CardDiv>
          <ConDiv>
            <ImgDiv>
              <img src="/assets/images/parents/card3.png" alt="" />
              <img src="/assets/images/parents/quote.svg" alt="" />
            </ImgDiv>
            <ConSpan1></ConSpan1>
            <HumanDiv>
              <NameSpan></NameSpan>
              <ParentDiv></ParentDiv>
              <ParentSpan></ParentSpan>
            </HumanDiv>
          </ConDiv>
          <ConSpan2></ConSpan2>
        </CardDiv>
      </Cards>
    </Fifth>
  );
}
export default Section5;

export const Fifth = styled.div``;

export const Span1 = styled.span``;

export const Span2 = styled.span``;

export const Cards = styled.div``;

export const CardDiv = styled.div``;

export const ConDiv = styled.div``;

export const ImgDiv = styled.div``;

export const ConSpan1 = styled.span``;

export const HumanDiv = styled.div``;

export const NameSpan = styled.span``;

export const ParentDiv = styled.div``;

export const ParentSpan = styled.div``;

export const ConSpan2 = styled.span``;

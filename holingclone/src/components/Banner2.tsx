import styled from "styled-components";

function Banner2() {
  return (
    <Banner>
      <Spans>
        <Span1>학교, 학원에서 120만 학생이 경험한 수학 학습 솔루션</Span1>
        <Span2>우리 아이의 첫 수학 학습, 홀링으로 시작하세요</Span2>
      </Spans>
      <SubBtnA href="">
        <SubDiv>구독하기</SubDiv>
      </SubBtnA>
    </Banner>
  );
}
export default Banner2;

export const Banner = styled.div``;

export const Spans = styled.div``;

export const Span1 = styled.span``;

export const Span2 = styled.span``;

export const SubBtnA = styled.a``;

export const SubDiv = styled.div``;

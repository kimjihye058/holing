import styled from "styled-components";

function Section4() {
  return (
    <Fourth>
      <Span1>
        홀링으로 공부하면
        <br />
        수학<Span2>실력이 오르는</Span2> 이유
      </Span1>
      <Reasons>
        <Reason>
          <DescDiv>
            <DescSpan>
              30억 누적 데이터가 안내하는 학습 경로로 더 빠르게
            </DescSpan>
          </DescDiv>
          <DescImg src="/assets/images/reason/reason1.svg" alt="이유1" />
        </Reason>
        <Reason>
          <DescDiv>
            <DescSpan>
              학교 현장에서 인정받는 학습 내용으로 더 촘촘하게
            </DescSpan>
          </DescDiv>
          <DescImg src="/assets/images/reason/reason2.svg" alt="이유2" />
        </Reason>
      </Reasons>
    </Fourth>
  );
}
export default Section4;

export const Fourth = styled.div``;

export const Span1 = styled.span``;

export const Span2 = styled.span``;

export const Reasons = styled.div``;

export const Reason = styled.div``;

export const DescDiv = styled.div``;

export const DescSpan = styled.span``;

export const DescImg = styled.img``;

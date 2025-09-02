import styled from "styled-components";

function Section3() {
  return (
    <Third>
      <SpansDiv>
        <Span1>초등 수학 공부, 아이가 잘 따라갈 수 있을까요?</Span1>
        <Span2>
          홀링은
          <Span2_1>스스로 끝까지</Span2_1>
          해낼 수 있는
          <br />
          습관과 자신감을 길러줘요
        </Span2>
      </SpansDiv>
      <div></div>
    </Third>
  );
}
export default Section3;

export const Third = styled.div`
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
  width: 100%;
  background: white;
  padding-top: 120px;
  padding-bottom: 120px;
`;

export const SpansDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-align: center;
  align-items: center;
`;

export const Span1 = styled.span`
  font-family: SUIT;
  font-size: 30px;
  font-weight: 300;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: 1.4;
`;

export const Span2 = styled.span`
  font-family: inherit;
  font-size: 48px;
  font-weight: 300;
  color: inherit;
  text-align: center;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

export const Span2_1 = styled.span`
  font-family: inherit;
  font-size: 48px;
  font-weight: 500;
  color: var(--point_01);
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: inherit;
`;

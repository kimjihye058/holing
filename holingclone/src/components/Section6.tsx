import styled from "styled-components";

function Section6() {
  return (
    <Sixth>
      <TitleSpan>자주 묻는 질문</TitleSpan>
      <QaADiv>
        <Question>
          <QuesHeader1>
            <QuesHeader2>
              <img src="" alt="" />
              <QuesSpan>누가 이용할 수 있나요?</QuesSpan>
            </QuesHeader2>
            <img src="" alt="" />
          </QuesHeader1>
          <Answer>
            초등, 중등, 고등의 1,2학기 전체 과정을 모두 이용할 수 있어요.
          </Answer>
        </Question>
      </QaADiv>
    </Sixth>
  );
}
export default Section6;

export const Sixth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 120px 40px;
  background: rgb(246, 247, 249);
`;

export const TitleSpan = styled.span`
  font-family: Maplestory;
  font-size: 48px;
  font-weight: 300;
  color: inherit;
  text-align: inherit;
  width: unset;
  white-space: normal;
  line-height: 1.4;
  -webkit-text-stroke: 0.3px black;
`;

export const QaADiv = styled.div``;

export const Question = styled.div``;

export const QuesHeader1 = styled.div``;

export const QuesHeader2 = styled.div``;

export const QuesSpan = styled.span``;

export const Answer = styled.div``;

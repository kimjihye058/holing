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

export const Sixth = styled.div``;

export const TitleSpan = styled.span``;

export const QaADiv = styled.div``;

export const Question = styled.div``;

export const QuesHeader1 = styled.div``;

export const QuesHeader2 = styled.div``;

export const QuesSpan = styled.span``;

export const Answer = styled.div``;

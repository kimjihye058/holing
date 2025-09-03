import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <FlowDiv />
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

import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <FlowDiv />
      <FooterDiv>
        <FooterConDiv></FooterConDiv>
      </FooterDiv>
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

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  background: #c1e9f8;
`;

export const FooterConDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 384px;
  padding: 40px;
  background: rgb(193, 233, 248);
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;

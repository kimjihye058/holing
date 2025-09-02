import styled from "styled-components";

import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Banner1 from "./components/Banner1";
import Section2 from "./components/Section2";


const Main = styled.div`
  margin-top: 80px;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-align: center;
  align-items: center;
`;


function Home() {
  

  return (
    <>
      <Nav />
      <Main>
        <Section1 />
        <Banner1 />
        <Section2 />
      </Main>
    </>
  );
}
export default Home;

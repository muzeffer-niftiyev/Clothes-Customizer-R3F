import styled from "styled-components";

const Main = styled.main`
  width: 60%;
  margin: auto;
`;

const MainHeader = styled.h1`
  font-size: 200px;
  line-height: 0.85;
  font-style: italic;
  font-weight: 900;
`;



const HomePage = () => {
  return (
    <Main>
      <div>
        <MainHeader>
          LET&apos;S
          <br /> DO
          <br /> IT.
        </MainHeader>
        <p>
          Create your unique and exclusive clothes with our brand-new 3D
          customization tool. <b>Unleash your imagination</b> and define your
          own style.
        </p>
      </div>
    </Main>
  );
};

export default HomePage;

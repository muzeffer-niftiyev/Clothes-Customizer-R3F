import styled from "styled-components";
import { CustomButton } from "../components";
import { customizeIcon } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsIntro } from "../features/pageSlice";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainHeader = styled.h1`
  font-size: 200px;
  line-height: 0.85;
  font-style: italic;
  font-weight: 900;
  width: 40%;
  margin: 0;
  color: #222;
`;

const MainText = styled.p`
  text-align: left;

  font-size: 18px;
  color: #333;
  line-height: 1.5;
`;

const TextContainer = styled.div`
  transform: translate(90%, -50%);
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const isIntro = useSelector((state) => state.isIntro.isIntro);

  const handleCustomizeBtn = () => {
    dispatch(toggleIsIntro());
  };

  return (
    isIntro && (
      <Main>
        <div>
          <MainHeader>LET&apos;S DO IT.</MainHeader>
          <TextContainer>
            <MainText>
              Create your unique and exclusive clothes with our brand-new 3D
              customization tool. <b>Unleash your imagination</b> and define
              your own style.
            </MainText>
            <div>
              <CustomButton
                
                text="Customize It"
                icon={customizeIcon}
                onClick={handleCustomizeBtn}
              />
            </div>
          </TextContainer>
        </div>
      </Main>
    )
  );
};

export default HomePage;

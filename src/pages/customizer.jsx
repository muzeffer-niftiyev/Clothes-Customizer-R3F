import { useDispatch, useSelector } from "react-redux";
import { backIcon } from "../assets/icons";
import { CustomButton } from "../components";
import { modelTypes } from "../data/modelTypes";
import { toggleIsIntro } from "../features/pageSlice";
import styled from "styled-components";

const CustomizerContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > div {
    padding: 50px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > button {
    position: absolute;
    right: 0;
  }

  div img {
    width: 50px;
  }
`;

const ModelsContainer = styled.div`
  display: flex;
  gap: 25px;

  & > button {
    border: 2px solid #ddd;
    cursor: pointer;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    background-color: inherit;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomizerPage = () => {
  const dispatch = useDispatch();
  const isIntro = useSelector((state) => state.isIntro.isIntro);

  const handleGoBack = () => {
    dispatch(toggleIsIntro());
  };

  return (
    !isIntro && (
      <CustomizerContainer>
        <div>
          <Header>
            <ModelsContainer>
              {modelTypes.map((model) => (
                <button key={model.id}>
                  <img src={model.icon} alt="" />
                </button>
              ))}
            </ModelsContainer>
            <CustomButton
              text="Go Back"
              icon={backIcon}
              onClick={handleGoBack}
            />
          </Header>
          <Bottom>
            <div>
              <h1>Icons</h1>
            </div>

            <div>
              <h1>Colors</h1>
            </div>

            <CustomButton text="Download" />
          </Bottom>
        </div>
      </CustomizerContainer>
    )
  );
};

export default CustomizerPage;

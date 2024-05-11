/* eslint-disable react/prop-types */
import { Button } from "../styles";
import { useSelector } from "react-redux";

const CustomButton = ({ text, icon, onClick }) => {
  const colorValue = useSelector((state) => state.color.color);

  return (
    <Button onClick={onClick} color={colorValue}>
      {text} <img src={icon} />
    </Button>
  );
};

export default CustomButton;

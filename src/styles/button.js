import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 25px;
  text-transform: uppercase;
  border: 1px solid #ddd9d9;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: #eee;
  cursor: pointer;

  img {
    width: 20px;
  }
`;

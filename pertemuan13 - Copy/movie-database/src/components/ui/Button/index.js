import styled, { css } from "styled-components";

const Button = styled.button`
  padding: ${(props) => getSizeValue(props.size).padding};
  font-size: ${(props) => getSizeValue(props.size).fontSize};
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

const getSizeValue = (size) => {
  switch (size) {
    case "small":
      return {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
      };
    case "large":
      return {
        padding: "1rem 2rem",
        fontSize: "1.2rem",
      };
    default:
      return {
        padding: "0.8rem 2rem",
        fontSize: "1rem",
      };
  }
};

export default Button;

import styled, { css } from "styled-components";
import sort from "./images/sort.svg";

const DropDownSelect = styled.select`
  margin: 0px 20px;
  padding: 0px 10px 0px 20px;
  background: linear-gradient(to bottom, white, #f9fafb);
  border: 1px solid;
  border-color: #c4cdd5;
  border-radius: 4px;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  height: 36px;
  outline: none;
  flex: 90%;
  appearance: none;
    background: transparent url("${sort}") no-repeat 220px center;
    ${props =>
      props.smallDropdownBox &&
      css`
    background: transparent url("${sort}") no-repeat 175px center;
    `};
    background-size: 40px 20px;
  flex: 100%;
  color: #222;
  font-size: 0.7rem;
  ${({ top }) =>
    top &&
    css`
      margin-top: 20px;
    `}
`;

export default DropDownSelect;

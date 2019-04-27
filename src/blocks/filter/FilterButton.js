import styled, { css } from "styled-components";

export const FilterBtn = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(to bottom, white, #f9fafb);
  outline: none;
  cursor: pointer;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
  border: 1px solid #c4cdd5;
  color: #212b36;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition-property: background, border, box-shadow, -webkit-box-shadow;
  transition-timing-function: cubic-bezier(0.64, 0, 0.35, 1);
  transition-duration: 200ms;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.7rem;
  margin-right: 10px;
  ${({ special }) =>
    special &&
    css`
      width: auto;
      margin-left: 10px;
      border-radius: 3px;
    `}
  &:hover {
    background: linear-gradient(to bottom, #f9fafb, #f4f6f8);
  }
`;

export default FilterBtn;

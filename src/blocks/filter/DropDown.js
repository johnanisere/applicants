import styled, { css } from "styled-components";

const DropDown = styled.div`
  padding: 10px 0px;
  box-sizing: border-box;
  min-height: 100px;
  z-index: 2;

  position: absolute;
  top: 45px;
  left: 0px;
  transform: scale(0);
  margin: 0;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 0 0 1px rgba(39, 44, 48, 0.05),
    0 2px 7px 1px rgba(39, 44, 48, 0.16);
  border-radius: 3px;
  min-width: 300px;
  ${props =>
    props.smallDropdownBox &&
    css`
      min-width: 250px;
    `};
  opacity: 0;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.64, 0, 0.35, 1);
  ${props =>
    props.show &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

export default DropDown;

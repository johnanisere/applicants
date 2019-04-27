import styled from "styled-components";

import DropDown from "./DropDown";
import Select from "./Select";
import Label from "./Label";

const SortBox = styled.div`
  flex: 1;
  padding-left: 10px;
  display: flex;
  height: 36px;
  @media (max-width: 768px) {
    padding: 10px;
    padding-left: 0;
  }
`;

SortBox.Label = Label;
SortBox.Select = Select;
SortBox.DropDown = DropDown;

export default SortBox;

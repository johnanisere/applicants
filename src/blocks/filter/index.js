import styled from "styled-components";

import DropDown from "./DropDown";
import FilterButton from "./FilterButton";
import DropDownLabel from "./DropDownLabel";
import DropDownSelect from "./DropDownSelect";
import DropDownSelectBox from "./DropDownSelectBox";

const Filter = styled.aside`
  box-sizing: border-box;
  position: relative;
  flex: 1;
`;

Filter.DropDown = DropDown;
Filter.FilterButton = FilterButton;
Filter.DropDownLabel = DropDownLabel;
Filter.DropDownSelect = DropDownSelect;
Filter.DropDownSelectBox = DropDownSelectBox;

export default Filter;

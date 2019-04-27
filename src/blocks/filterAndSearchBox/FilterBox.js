import styled from "styled-components";

const FilterBox = styled.div`
  flex: ${props => (props.flex ? props.flex : "6%")};
  display: flex;
  align-items: stretch;
`;

export default FilterBox;

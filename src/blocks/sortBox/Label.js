import styled from "styled-components";

const SortLabel = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  span {
    color: #212b36;
    font-size: 0.7rem;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    flex: 1;
    justify-content: flex-start;
  }
`;
export default SortLabel;

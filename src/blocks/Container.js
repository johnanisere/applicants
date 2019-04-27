import styled from "styled-components";

const Container = styled.section`
  display: flex;
  padding: 20px 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export default Container;

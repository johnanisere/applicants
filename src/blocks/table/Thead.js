import styled from "styled-components";

const Head = styled.thead`
  @media (max-width: 768px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    tr {
      height: auto;
      border-bottom: 2px solid #ddd;
      display: block;
      margin-bottom: 1.625em;
      background-color: rgba(0, 0, 0, 0.01);
    }
  }
  & > th.align-right {
    text-align: right;
  }
`;
export default Head;

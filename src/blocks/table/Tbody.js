import styled from "styled-components";

const Tbody = styled.tbody`
  tr {
    &:hover {
      background-color: #f9fafb;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    border: 0;

    tr {
      height: auto;
      border-bottom: 2px solid #ddd;
      display: block;
      margin-bottom: 1.625em;
      background-color: rgba(0, 0, 0, 0.01);
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
      line-height: 30px;
    }

    td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-th);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`;
export default Tbody;

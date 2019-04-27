import styled from "styled-components";

import Td from "./Td";
import Th from "./Th";
import Thead from "./Thead";
import Tbody from "./Tbody";

const Table = styled.table`
  width: 100%;
  color: #212b36;
  table-layout: auto;
`;
Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Th = Th;

export default Table;

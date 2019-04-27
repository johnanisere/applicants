import React from "react";

import Table from "../../blocks/table";
import tableTitle from "./constants/tableTitle";

const TableHead = () => (
  <Table.Thead>
    <tr>
      {tableTitle.map((val, key) => (
        <Table.Th key={key}>{val}</Table.Th>
      ))}
    </tr>
  </Table.Thead>
);

export default TableHead;

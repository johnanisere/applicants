import React from "react";

import Table from "../../blocks/table";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const App = ({ applications }) => (
  <Table>
    <TableHead />
    <TableBody applications={applications} />
  </Table>
);

export default App;

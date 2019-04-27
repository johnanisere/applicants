import React from "react";
import PropTypes from "prop-types";

import Table from "../../blocks/table";
import tableTitle from "./constants/tableTitle";
import { getAge } from "../../utils/helpers";

const TableBody = ({ applications }) => (
  <Table.Tbody>
    {applications.map(
      (
        {
          name,
          email,
          birth_date,
          year_of_experience,
          position_applied,
          application_date,
          status
        },
        key
      ) => (
        <tr key={key}>
          <Table.Td data-th={tableTitle[0]}>{name}</Table.Td>
          <Table.Td data-th={tableTitle[1]}>{email}</Table.Td>
          <Table.Td data-th={tableTitle[2]}>{getAge(birth_date)}</Table.Td>
          <Table.Td data-th={tableTitle[3]}>{year_of_experience}</Table.Td>
          <Table.Td data-th={tableTitle[4]}>{position_applied}</Table.Td>
          <Table.Td data-th={tableTitle[5]}>{application_date}</Table.Td>
          <Table.Td data-th={tableTitle[6]}>{status}</Table.Td>
        </tr>
      )
    )}
  </Table.Tbody>
);

TableBody.propTypes = {
  applications: PropTypes.array
};

TableBody.defaultProps = {
  applications: []
};

export default TableBody;

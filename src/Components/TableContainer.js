import React from "react";
import Table from "react-bootstrap/Table";

function TableContainer({ data }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt, index) => (
            <tr key={index}>
              <td>{dt.firstName}</td>
              <td>{dt.lastName}</td>
              <td>{dt.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableContainer;

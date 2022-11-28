import React, { Component } from "react";

import { connect } from "react-redux";
import { Table } from "@mantine/core";

function Main(props) {
  const ths = (
    <tr>
      <th>id</th>
      <th>customerName</th>
      <th>customerName</th>
      <th>accountType</th>
    </tr>
  );

  const rows = props.accounts.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.accountNumber}</td>
      <td>{element.customerName}</td>
      <td>{element.accountType}</td>
    </tr>
  ));

  return (
    <Table
      captionSide="bottom"
      className="m-2
    "
    >
      <caption>Bank account</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(Main);

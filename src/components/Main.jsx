import React, { Component } from "react";

import { connect } from "react-redux";
import { Table } from "@mantine/core";
import Form from "./Form";

function Main(props) {
  const ths = (
    <tr>
      <th>id</th>
      <th>Customer Name</th>
      <th>Account Number</th>
      <th>Account Type</th>
    </tr>
  );
  {
    console.log(props.accounts);
  }
  const rows = props.accounts?.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.accountNumber}</td>
      <td>{element.customerName}</td>
      <td>{element.accountType}</td>
    </tr>
  ));

  return (
    <>
      <h1 className="text-center m-5">
        Account Number {props.accounts.length}
      </h1>
      ;
      <Form />
      <Table
        captionSide="bottom"
        className="m-2
    "
      >
        <caption>Bank account</caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps)(Main);

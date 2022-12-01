import React, { Component } from "react";

import { connect } from "react-redux";
import { Table } from "@mantine/core";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";

import { accountsSlice, delAccount, addAccount } from "../store/reducer";

function Main() {
  const accounts = useSelector((state) => state.accounts.accounts);
  console.log(accounts);
  const dispatch = useDispatch();

  const ths = (
    <tr>
      <th>id</th>
      <th>Customer Name</th>
      <th>Account Number</th>
      <th>Account Type</th>
      <th>Delete</th>
    </tr>
  );

  const rows = accounts?.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.accountNumber}</td>
      <td>{element.customerName}</td>
      <td>{element.accountType}</td>
      <td>
        <button
          className="btn-danger"
          style={{
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            color: "white",
            margin: "2px",
          }}
          onClick={() => {
            dispatch(delAccount(Number(element.id)));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h1 className="text-center m-5">Account Number {accounts.length}</h1>;
      <div className="d-flex justify-content-around p-5">
        <div className="col-lg-5 flex-gap-3 ">
          <Form />
        </div>
        <div className="col-lg-6 shadow ">
          <div className="mt-3">
            <Table captionSide="bottom">
              <thead>{ths}</thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

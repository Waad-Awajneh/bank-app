import React, { useState } from "react";

import { connect } from "react-redux";

let test = { id: 0, customerName: "", accountNumber: "", accountType: "" };
function Form(props) {
  //   const [formV, setForm] = useState({

  //   });

  const onChange = (e) => {
    // setForm({ ...formV, [e.target.name]: e.target.value });
    test = { ...test, [e.target.name]: e.target.value };
  };

  return (
    <form className="m-5 align-center">
      <div class="form-group row mb-2 ">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          id
        </label>
        <div class="col-sm-5">
          <input
            type="number"
            class="form-control"
            id="inputEmail3"
            placeholder="Id"
            onChange={onChange}
            name="id"
          />
        </div>
      </div>
      <div class="form-group row mb-2 ">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="Name"
            onChange={onChange}
            name="customerName"
          />
        </div>
      </div>
      <div class="form-group row mb-2 ">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Account Number
        </label>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            id="inputPassword3"
            placeholder="Account Number"
            onChange={onChange}
            name="accountNumber"
          />
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">AccountType</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="gridRadios1"
                value="Current"
                onChange={onChange}
                name="accountType"
              />
              <label class="form-check-label" for="gridRadios1">
                Current
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="accountType"
                id="gridRadios2"
                value="Saving"
                onChange={onChange}
              />
              <label class="form-check-label" for="gridRadios2">
                Saving
              </label>
            </div>
            <div class="form-check disabled">
              <input
                class="form-check-input"
                type="radio"
                name="accountType"
                id="gridRadios3"
                value="Salary"
                onChange={onChange}
              />
              <label class="form-check-label" for="gridRadios3">
                Salary
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="button"
            onClick={props.addAccount}
            class="btn btn-primary"
          >
            Add Account
          </button>
        </div>
      </div>
    </form>
  );
}
const mapDispachToProps = (dispatch) => {
  return {
    addAccount: () => dispatch({ type: "addAccount", value: test }),
  };
};
const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Form);

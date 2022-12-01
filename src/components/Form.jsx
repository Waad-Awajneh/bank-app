import { useSelector, useDispatch } from "react-redux";

import { addAccount } from "../store/reducer";

let test = { id: 0, customerName: "", accountNumber: "", accountType: "" };
function Form() {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const onChange = (e) => {
    test = { ...test, [e.target.name]: e.target.value };
  };

  return (
    <form className=" align-center">
      <div class="form-group row mb-2 ">
        <label for="inputEmail3" class=" col-form-label">
          id
        </label>
        <input
          type="number"
          class="form-control"
          id="inputEmail3"
          placeholder="Id"
          onChange={onChange}
          name="id"
        />
      </div>
      <div class="form-group row mb-2 ">
        <label for="inputEmail3" class=" col-form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="inputEmail3"
          placeholder="Name"
          onChange={onChange}
          name="customerName"
        />
      </div>
      <div class="form-group row mb-2 ">
        <label for="inputPassword3" class=" col-form-label">
          Account Number
        </label>
        <input
          type="text"
          class="form-control"
          id="inputPassword3"
          placeholder="Account Number"
          onChange={onChange}
          name="accountNumber"
        />
      </div>
      <div class="form-group d-flex ">
        <div class=" d-flex row ">
          <div class="form-check">
            <legend class="col-form-label">AccountType</legend>

            <label class="mr-5 form-check-label" for="gridRadios1">
              Current
            </label>
            <input
              class=" form-check-input"
              type="radio"
              id="gridRadios1"
              value="Current"
              onChange={onChange}
              name="accountType"
            />
          </div>
          <div class="form-check">
            <label class=" mr-5 form-check-label" for="gridRadios2">
              Saving
            </label>
            <input
              class=" form-check-input"
              type="radio"
              name="accountType"
              id="gridRadios2"
              value="Saving"
              onChange={onChange}
            />
          </div>
          <div class=" form-check  ">
            <label class="mr-5  form-check-label" for="gridRadios3">
              Salary
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="accountType"
              id="gridRadios3"
              value="Salary"
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button
            type="button"
            onClick={() => {
              dispatch(addAccount(test));
            }}
            class="btn btn-primary"
          >
            Add Account
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

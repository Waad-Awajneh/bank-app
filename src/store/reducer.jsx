import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
  numberOfAccounts: 2,
};

export const accountsSlice = createSlice({
  name: "Accounts",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.accounts.push(action.payload);
      state.numberOfAccounts += 1;
    },
    delAccount: (state, action) => {
      console.log(action.payload);
      state.numberOfAccounts -= 1;

      state.accounts = state.accounts.filter((ele) => {
        return ele.id != action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAccount, delAccount } = accountsSlice.actions;

export default accountsSlice.reducer;

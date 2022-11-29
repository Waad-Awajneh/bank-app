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
};

const reducer = (state = initialState, action) => {
  // const newState = { ...state };
  switch (action.type) {
    case "addAccount":
      console.log(action);
      return {
        ...state,
        accounts: [...state.accounts, action.value],
      };
  }

  return state;
};

export default reducer;

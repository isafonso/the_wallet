export const initialState = {
  id: 1,
  name: "",
  age: 19,
  admin: true,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "STORE":
      return { ...state, name: action.payload };
      break;

    case "SHOW":
      return { ...state };
      break;

    default:
      return { ...state };
      break;
  }
};

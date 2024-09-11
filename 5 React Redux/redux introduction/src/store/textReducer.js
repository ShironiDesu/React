const defaultState = {
  msg: "",
};
export const textReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INPUT_TEXT":
      return { ...state, msg: action.payload };
    default:
      return state;
  }
};

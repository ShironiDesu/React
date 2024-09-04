const defaultState = {
  isDark: false,
};
export const darkModeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

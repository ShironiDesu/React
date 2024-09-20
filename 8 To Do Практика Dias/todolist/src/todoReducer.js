const defaultState = {
  todo: [],
};
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo };
  }
};

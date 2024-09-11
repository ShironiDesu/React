import { getCustomersAction } from "../store/customerReducer";

const url = "https://jsonplaceholder.typicode.com/users";
export const fetchCustomers = () => {
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch(getCustomersAction(json));
      });
  };
};

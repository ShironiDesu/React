const defaultState = {
  customers: [
    {
      name: "John Snow",
      age: 31,
      job: "Король Севера",
    },
  ],
};
const ADD_CUSTOMER = "ADD_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";
const GET_CUSTOMERS = "GET_CUSTOMERS";
const SORT_CUSTOMERS = "SORT_CUSTOMERS";
const FILTER_CUSTOMERS = "FILTER_CUSTOMERS";
export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      };
    case SORT_CUSTOMERS:
      return {
        ...state,
        customers: [
          ...state.customers.sort((a, b) =>
            a[action.payload].localeCompare(b[action.payload])
          ),
        ],
      };
    case FILTER_CUSTOMERS:
      return {
        ...state,
        customers: [
          ...state.customers.filter((customer) =>
            customer.name
              .toLocaleLowerCase()
              .includes(action.payload.toLocaleLowerCase())
          ),
        ],
      };
    default:
      return state;
  }
};
export const getCustomersAction = (payload) => ({
  type: GET_CUSTOMERS,
  payload,
});
export const addCustomerAction = (payload) => ({
  type: ADD_CUSTOMER,
  payload,
});
export const deleteCustomerAction = (payload) => ({
  type: DELETE_CUSTOMER,
  payload,
});
export const sortCustomersAction = (payload) => ({
  type: SORT_CUSTOMERS,
  payload,
});
export const filterCustomerAction = (payload) => ({
  type: FILTER_CUSTOMERS,
  payload,
});

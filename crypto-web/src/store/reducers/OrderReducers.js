import { REQUEST_ORDER_LIST } from "../actions/OrderActions";

export const SUCCESS_ORDER_LIST = "SUCCESS_ORDER_LIST";
export const FAILURE_ORDER_LIST = "FAILURE_ORDER_LIST";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  errorMessage: null
};

export default function orders(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ORDER_LIST:
      return { ...state, loading: true };
    case SUCCESS_ORDER_LIST:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false
      };
    case FAILURE_ORDER_LIST:
      return {
        ...state,
        data: state.data,
        loading: false,
        error: true,
        errorMessage: "Error fetch Products List"
      };
    default:
      return state;
  }
}

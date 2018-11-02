export const REQUEST_ORDER_LIST = "REQUEST_ORDER_LIST";

export function requestOrderList(precision) {
  return {
    type: REQUEST_ORDER_LIST,
    precision
  };
}
export const ProductsReducer = (state, action) => {
  if (action.type === "FETCH_START") {
    return { ...state, loading: true };
  }
  if (action.type === "FETCH_FAILURE") {
    return { ...state, loading: false, error: action.payload };
  }
  if (action.type === "FETCH_SUCCESS") {
    return { ...state, loading: false, productsList: action.payload.products };
  }
  return state;
};

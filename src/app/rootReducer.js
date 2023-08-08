"use client";

const initialState = {
  productsCount: 0,
  productsDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_COUNT":
      return { ...state, productsCount: state.productsCount + 1 };

    case "PRODUCT_DETAILS":
      return {
        ...state,
        productsDetails: {
          ...state.productsDetails,
          [action.id]: action.product,
        },
      };
  }

  return state;
};

export default rootReducer;

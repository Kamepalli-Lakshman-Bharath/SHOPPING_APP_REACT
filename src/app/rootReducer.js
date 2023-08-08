"use client";

const initialState = {
  productsCount: 0,
  productsDetails: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_COUNT":
      const updatedCount = state.productsCount + 1;
      localStorage.setItem("PRODUCTS_COUNT", JSON.stringify(updatedCount));
      return { ...state, productsCount: state.productsCount + 1 };

    case "PRODUCT_DETAILS":
      const updatedProductDetails = {
        ...state.productsDetails,
        [action.id]: action.product,
      };

      localStorage.setItem(
        "PRODUCTS_DETAILS",
        JSON.stringify(updatedProductDetails)
      );
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

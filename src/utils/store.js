import { configureStore } from "@reduxjs/toolkit";
// SAVE FORECAST DATA TO REDUX STORE
export const store = configureStore({
  reducer: {
    forecast: (state = null, action) => {
      switch (action.type) {
        case "SET_FORECAST":
          return action.payload;
        default:
          return state;
      }
    },
  },
});

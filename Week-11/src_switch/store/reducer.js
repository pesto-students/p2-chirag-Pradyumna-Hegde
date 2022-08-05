import { configureStore } from "redux";

export const toggle = {
  type: "toggled",
};

//Reducer
let initialState = {
  isLightOn: true,
};

export default function toggler(state = initialState, action) {
  if (action.type === "toggled") {
    return {
      ...state,
      isLightOn: !state.isLightOn,
    };
  }
}

export const store = configureStore({ reducer: toggler });

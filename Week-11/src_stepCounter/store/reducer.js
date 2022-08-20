export const increment = {
  type: "INCREMENT",
  description: "incremented by 1"
};

export const decrement = {
  type: "DECREMENT",
  description: "decremented by 1"
};

export const reset = {
  type: "RESET",
  description: "counter resets to zero"
};

let initialState = {
  value: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      state = { ...state, value: state.value + 1 };
      break;

    case "DECREMENT":
      if (state.value !== 0) state = { ...state, value: state.value - 1 };
      break;

    case "RESET":
      state = { ...state, value: 0 };
      break;

    default:
      return state;
  }
}


import { createStore } from "redux";

const reducerFn = (
  state = {
    theme: "light",
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "THEME_LIGHT":
      newState.theme = "light";
      return { theme: newState.theme };

    case "THEME_DARK":
      newState.theme = "dark";
      return { theme: newState.theme };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;

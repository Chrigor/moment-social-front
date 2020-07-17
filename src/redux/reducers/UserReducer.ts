import produce from "immer";
import { IUserReducer } from "../types/";
import { light, dark } from "./../../themes";

const initialState: IUserReducer = {
  theme: dark,
};

interface Action {
  type: string;
  payloading?: object;
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case "toggleTheme": {
      return produce(state, (draft) => {
        let theme = (state.theme === light ? dark : light);
        console.log(theme);
        draft.theme = theme;
      });
    }
    default: {
      return state;
    }
  }
};

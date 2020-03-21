import { SET_ONCHANGE } from "../actions/acation";

export const formReducer = (state, { type, name, value }) => {
  switch (type) {
    case SET_ONCHANGE:
      return {
        ...state,
        [name]: value
      };
    default:
      throw new Error("Unexpected action");
  }
};

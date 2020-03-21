import { useReducer } from "react";
import { formReducer } from "./formReducer";

export const useFormReducer = () => {
  return useReducer(formReducer, {});
};

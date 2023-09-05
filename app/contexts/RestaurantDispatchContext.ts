import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/RestaurantReducer";

export const RestaurantDispatchContext = createContext<Dispatch<IAction>>(
  () => {
    return;
  }
);

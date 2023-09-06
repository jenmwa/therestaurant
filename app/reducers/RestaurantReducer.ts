import { IRestaurant } from "../models/IRestaurant";

export interface IAction {
  type: string;
  payload: IRestaurant;
}

export const RestaurantReducer = (
  restaurant: IRestaurant,
  action: IAction
): IRestaurant => {
  if (action.type === "SETRESTAURANT") {
    return action.payload;
  }
  return restaurant;
};

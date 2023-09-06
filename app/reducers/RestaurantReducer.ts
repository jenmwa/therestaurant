import { IRestaurant } from "../models/IRestaurant";

export interface IAction {
  type: string;
  payload: string;
}

export const RestaurantReducer = (
  restaurant: IRestaurant,
  action: IAction
): IRestaurant => {

  if(action.type === 'SETRESTAURANT') {
    return JSON.parse(action.payload)
  }
  return restaurant;
};

import { useContext } from "react";
import "../style/about.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { IRestaurant } from "../models/IRestaurant";

export const About = () => {
  const restaurant = useContext<IRestaurant>(RestaurantContext);

  return (
    <>
      <section className="about">
        <h1>{restaurant.name.toUpperCase()}</h1>
      </section>
    </>
  );
};

import { useContext } from "react";
import "../style/about.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { IRestaurant } from "../models/IRestaurant";
import { Section } from "./styled/Sections";

export const About = () => {
  const restaurant = useContext<IRestaurant>(RestaurantContext);

  return (
    <>
      <Section>
        <h1>{restaurant.name}</h1>
      </Section>
    </>
  );
};

import { useContext } from "react";
import "../style/about.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { IRestaurant } from "../models/IRestaurant";
import { Section } from "./styled/Sections";
import { H1 } from "./styled/Headings";

export const About = () => {
  const restaurant = useContext<IRestaurant>(RestaurantContext);

  return (
    <>
      <Section>
        <H1>{restaurant.name}</H1>
      </Section>
    </>
  );
};

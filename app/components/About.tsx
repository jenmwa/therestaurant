import { useContext } from "react";
import "../style/about.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";

export const About = () => {
  const restaurant = useContext(RestaurantContext);
  console.log(restaurant);

  return (
    <>
      <section className="about">
        about
        <p>{restaurant.city}</p>
      </section>
    </>
  );
};

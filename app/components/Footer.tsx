import React, { useContext } from "react";
import "../style/footer.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";

export const Footer = () => {
  const restaurant = useContext(RestaurantContext);
  console.log(restaurant);
  // console.log(restaurant._id)

  return (
    <footer>
      Footer
      {JSON.stringify(restaurant)}
    </footer>
  );
};

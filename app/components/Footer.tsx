"use client";

import { useContext } from "react";
import "../style/footer.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
export const Footer = () => {
  const restaurant = useContext(RestaurantContext);

  return (
    <>
      <footer>{restaurant.name}</footer>
    </>
  );
};

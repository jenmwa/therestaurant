"use client";

import { useContext } from "react";
import "../style/footer.scss";
import { RestaurantContext } from "../contexts/RestaurantContext";
import Link from "next/link";
export const Footer = () => {
  const restaurant = useContext(RestaurantContext);

  return (
    <footer className="">
      {restaurant.name}
      <Link href="/admin">Admin</Link>
    </footer>
  );
};

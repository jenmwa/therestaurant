"use client";

import { CustomerForm } from "../components/CustomerForm";
import "../style/booking.scss";
import { BookTableForm } from "../components/BookTableForm";
import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";

export function Booking() {
  const { _id } = useContext(RestaurantContext);

  return (
    <>
      <section className="booking">
        <h2>Booking</h2>
        <BookTableForm restaurantId={_id}></BookTableForm>
      </section>
    </>
  );
}

export default Booking;

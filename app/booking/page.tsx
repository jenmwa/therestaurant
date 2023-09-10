"use client";

import "../style/booking.scss";
import { BookTableForm } from "../components/BookTableForm";
import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { Section } from "../components/styled/Sections";

export function Booking() {
  const { _id } = useContext(RestaurantContext);

  return (
    <>
      <Section>
        <h2>Booking</h2>
        <BookTableForm restaurantId={_id}></BookTableForm>
      </Section>
    </>
  );
}

export default Booking;

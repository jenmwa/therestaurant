"use client";

import "../style/booking.scss";
import { BookTableForm } from "../components/BookTableForm";
import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { Section } from "../components/styled/Sections";
import { H1 } from "../components/styled/Headings";

export function Booking() {
  const { _id } = useContext(RestaurantContext);

  return (
    <>
      <Section>
        <H1>Book a Table</H1>
        <BookTableForm restaurantId={_id}></BookTableForm>
      </Section>
    </>
  );
}

export default Booking;

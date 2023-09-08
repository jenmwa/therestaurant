"use client";

import { useContext, useEffect, useState } from "react";
import "../style/admin.scss";
import { IRestaurant } from "../models/IRestaurant";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { getBookings } from "../services/BookingService";
import { IBooking } from "../models/IBooking";
import { AdminBookings } from "../components/AdminBookings";

export function Admin() {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [bookings, setBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const id = restaurant._id;
    if (id) {
      (async () => {
        const response = await getBookings(id);
        if (response) {
          setBookings(response);
        }
      })();
    }
    console.log(restaurant);
  }, [restaurant]);
  // getBookings
  // deleteBooking
  // editBooking

  console.log("From admin bookings", bookings);

  return <AdminBookings bookings={bookings}></AdminBookings>;
}

export default Admin;

"use client";

import { useContext, useState } from "react";
import "../style/admin.scss";
import { IRestaurant } from "../models/IRestaurant";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { getBookings } from "../services/BookingService";
import { IBooking } from "../models/IBooking";
import { AdminBookings } from "../components/AdminBookings";

export function Admin() {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [bookings, setBookings] = useState<IBooking[]>([]);

  const handleAllBookings = () => {
    const id = restaurant._id;
    if (id) {
      (async () => {
        const response = await getBookings(id);
        if (response) {
          setBookings(response);
        }
      })();
    }
  };

  const handleEditClick = (booking: IBooking) => {
    console.log("click Edit on: ", booking);
  };

  const handleDeleteClick = (id: string) => {
    console.log("click Delete on: ", id);
  };

  console.log("From admin bookings", bookings);

  return (
    <AdminBookings
      bookings={bookings}
      handleAllBookings={handleAllBookings}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
    ></AdminBookings>
  );
}

export default Admin;

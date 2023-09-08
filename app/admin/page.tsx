"use client";

import { useContext, useState } from "react";
import "../style/admin.scss";
import { IRestaurant } from "../models/IRestaurant";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { getBookings } from "../services/BookingService";
import { IBooking } from "../models/IBooking";
import { AdminBookings } from "../components/AdminBookings";
import { useRouter } from "next/navigation";

export function Admin() {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const router = useRouter();

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
    router.push(`/admin/booking/+${booking._id}`);
    //till editläge direkt?
  };

  const handleDeleteClick = (id: string) => {
    console.log("click Delete on: ", id);
    // gör en servicefil
    // skicka en delete till: https://school-restaurant-api.azurewebsites.net/booking/delete/:id
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

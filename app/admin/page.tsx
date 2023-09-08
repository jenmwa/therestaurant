"use client";

import { useContext, useEffect, useState } from "react";
import "../style/admin.scss";
import { IRestaurant } from "../models/IRestaurant";
import { RestaurantContext } from "../contexts/RestaurantContext";
import { getBookings } from "../services/BookingService";
import Link from "next/link";

export function Admin() {
  const restaurant = useContext<IRestaurant>(RestaurantContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const id = restaurant._id;
    if (id) {
      (async () => {
        const response = await getBookings(id);
        setBookings(response);
      })();
    }
    console.log(restaurant);
  }, [restaurant]);
  // getBookings
  // deleteBooking
  // editBooking

  return (
    <section className="admin-wrapper">
      <h1>Admin</h1>
      {/* hämta bokningar från booking */}
      <button>Visa alla bokningar</button>
      {/* visa bokningar via namn på bokningen i en lista */}
      <ul>
        {bookings?.map((booking) => (
          <li key={booking._id}>
            <Link href={`/admin/booking/${booking._id}`}>Visa bokning</Link>
          </li>
        ))}
      </ul>
      {/* när man trycker på en bokning så får man fram ett kort med information som går att editera  */}
    </section>
  );
}

export default Admin;

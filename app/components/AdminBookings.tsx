import Link from "next/link";
import "../style/admin.scss";
import { Booking } from "../models/Booking";
import { useState } from "react";

interface IAdminBookingsProps {
  bookings: Booking[];
}

export const AdminBookings = ({ bookings }: IAdminBookingsProps) => {
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const updateFilter = (e) => {
    const filteredBookings = bookings.filter((b) => {
      return (
        b.customerInfo.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        b.customerInfo.lastname
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });

    setFilteredBookings(filteredBookings);
  };

  return (
    <section className="admin-wrapper">
      <h1>Admin</h1>
      <p>Sök bokning via namn</p>
      <input className="admin-input" onChange={updateFilter} type="text" />

      <ul className="admin-booking-list-wrapper">
        {filteredBookings.map((booking) => (
          <li className="admin-booking-list" key={booking._id}>
            <Link href={`/admin/booking/${booking._id}`}>
              <div className="list-details">
                <span>
                  {booking.customerInfo.name} {booking.customerInfo.lastname}
                </span>
                <span> {booking.date}</span>
                <span> {booking.time}</span>
                <span>{booking.numberOfGuests}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

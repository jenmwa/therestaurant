import Link from "next/link";
import "../style/admin.scss";
import { Booking } from "../models/Booking";
import { useState } from "react";

interface IAdminBookingsProps {
  bookings: Booking[];
  handleEditClick: (booking: Booking) => void;
  handleDeleteClick: (id: string) => void;
}

export const AdminBookings = ({
  bookings,
  handleEditClick,
  handleDeleteClick,
}: IAdminBookingsProps) => {
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  return (
    <section className="admin-wrapper">
      <h1>Admin</h1>
      <p>Sök bokning via namn</p>
      <input
        onChange={(e) => {
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
        }}
        type="text"
      />

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
            {/* <button onClick={() => handleEditClick(booking)}>Edit</button>
            <button onClick={() => handleDeleteClick(booking._id)}>
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

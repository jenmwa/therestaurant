import { ChangeEvent, FormEvent, useState } from "react";
import { CreateBooking } from "../models/CreateBooking";
import { ShowBookTableForm } from "./ShowBookTableForm";
import { createBookings, getBookings } from "../services/BookingService";

export const BookTableForm = ({ restaurantId }: { restaurantId: string }) => {
  const [userDate, setUserDate] = useState("");
  const [userGuests, setUserGuests] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isGuestFormSubmitted, setIsGuestFormSubmitted] = useState(false);

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    console.log(date);
    setUserDate(date);
    validateForm(date, userGuests);
  };

  const handleGuests = (e: ChangeEvent<HTMLSelectElement>) => {
    const guests = Number(e.target.value);
    console.log("you selected:", guests + " guests");
    setUserGuests(guests);
    validateForm(userDate, guests);
  };

  const validateForm = (date: string, guests: number) => {
    if (date && guests > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleTime = (time: string) => {
    console.log("click to show time");
    setSelectedTime(time);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      "check availability for : ",
      userGuests + " guests, " + userDate
    );
    // getBookings(restaurantId);
    getBookings("623b85d54396b96c57bde7c3");

    setIsGuestFormSubmitted(true);
  };

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    const booking = new CreateBooking(
      restaurantId,
      userDate,
      selectedTime,
      userGuests
    );
    console.log("confirmed booking: ", booking);
    //OBS! för att CREATEBOOKING MÅSTE VI HA CUSTOMER-OBJEKTET!
    createBookings(booking);
    setIsTimeSet(true);
  };

  return (
    <>
      <ShowBookTableForm
        handleSubmit={handleSubmit}
        handleGuests={handleGuests}
        handleTime={handleTime}
        handleDate={handleDate}
        handleBooking={handleBooking}
        userDate={userDate}
        userGuests={userGuests}
        selectedTime={selectedTime}
        isValid={isValid}
        isTimeSet={isTimeSet}
        isGuestFormSubmitted={isGuestFormSubmitted}
      ></ShowBookTableForm>
    </>
  );
};

// POST
// 'http://localhost:3000/booking/create' \
// [
//   {
//     "restaurantId": "623b85d54396b96c57bde7c3",
//     "date": "2022-01-01",
//     "time": "18:00",
//     "numberOfGuests": 4,
//     "customer": {
//       "name": "Franzén",
//       "lastname": "Sebastian",
//       "email": "someone@somedomain.com",
//       "phone": "070-1112233"
//     }
//   }

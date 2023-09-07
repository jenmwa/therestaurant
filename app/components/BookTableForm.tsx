import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NewBooking } from "../models/NewBooking";

export const BookTableForm = ({ restaurantId }: { restaurantId: string }) => {
  const [userDate, setUserDate] = useState("");
  const [userGuests, setUserGuests] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

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
    const booking = new NewBooking(
      restaurantId,
      userDate,
      selectedTime,
      userGuests
    );
    console.log("confirmed booking: ", booking);
  };

  return (
    <>
      <form className="form--book-table" onSubmit={handleSubmit}>
        <h3>lets book a table!</h3>
        <label>
          Select Date:<br></br>
          <input type="date" value={userDate} onChange={handleDate}></input>
        </label>

        <div className="select-dropdown">
          <label>
            Number of Guests:<br></br>
            <select
              name="number of guests"
              value={userGuests}
              onChange={handleGuests}
            >
              <option value="0">Select number of Guests:</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
        </div>

        {isValid && (
          <>
            Choose your time:
            <div className="btn-wrapper">
              <button
                className={`time-btn ${
                  selectedTime === "18:00" ? "selected" : ""
                }`}
                onClick={() => handleTime("18:00")}
              >
                18:00
              </button>
              <button
                className={`time-btn ${
                  selectedTime === "21:00" ? "selected" : ""
                }`}
                onClick={() => handleTime("21:00")}
              >
                21:00
              </button>
            </div>
          </>
        )}
        {selectedTime && (
          <div className="confirmation-div">
            <span>Your Booking:</span>
            <p>Selected Date: {userDate}</p>
            <p>Numbers of Guests: {userGuests}</p>
            <p>Selected Time: {selectedTime}</p>
          </div>
        )}
        <button
          type="submit"
          className="submit-btn"
          disabled={!isValid || !selectedTime}
        >
          Confirm Booking
        </button>
      </form>
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

import { ChangeEvent, FormEvent } from "react";

interface IShowBookTableFormProps {
  handleSubmit: (e: FormEvent) => void;
  handleGuests: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleTime: (time: string) => void;
  handleDate: (e: ChangeEvent<HTMLInputElement>) => void;
  userDate: string;
  userGuests: number;
  selectedTime: string | null;
  isValid: boolean;
}

export const ShowBookTableForm = ({
  handleSubmit,
  handleGuests,
  handleTime,
  handleDate,
  userDate,
  userGuests,
  selectedTime,
  isValid,
}: IShowBookTableFormProps) => {
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

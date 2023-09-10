import { FormEvent } from "react";
import { Form } from "./styled/Forms";
import { SubmitButton } from "./styled/Buttons";

interface ITimeSelectionFormProps {
  handleTime: (time: string) => void;
  handleBooking: (e: FormEvent) => void;
  selectedTime: string | null;
  isTimeSet: boolean;
  userDate: string;
  userGuests: number;
}

export const TimeSelectionForm = ({
  handleTime,
  handleBooking,
  selectedTime,
  isTimeSet,
  userDate,
  userGuests,
}: ITimeSelectionFormProps) => {
  return (
    <>
      <Form onSubmit={handleBooking}>
        Choose your time:
        <div className="btn-wrapper">
          <button
            className={`time-btn ${selectedTime === "18:00" ? "selected" : ""}`}
            onClick={() => handleTime("18:00")}
          >
            18:00
          </button>
          <button
            className={`time-btn ${selectedTime === "21:00" ? "selected" : ""}`}
            onClick={() => handleTime("21:00")}
          >
            21:00
          </button>
        </div>
        {selectedTime && (
          <div className="confirmation-div">
            <span>Your Booking:</span>
            <p>Selected Date: {userDate}</p>
            <p>Numbers of Guests: {userGuests}</p>
            <p>Selected Time: {selectedTime}</p>
          </div>
        )}
        <SubmitButton type="submit" disabled={!isTimeSet}>
          Continue with Booking
        </SubmitButton>
      </Form>
    </>
  );
};

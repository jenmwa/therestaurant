import { FormEvent } from "react";
import { Form } from "./styled/Forms";
import { SubmitButton, TimeButton } from "./styled/Buttons";

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
          <TimeButton
            isSelected={selectedTime === "18:00"}
            onClick={() => handleTime("18:00")}
          >
            18:00
          </TimeButton>
          <TimeButton
            isSelected={selectedTime === "21:00"}
            onClick={() => handleTime("21:00")}
          >
            21:00
          </TimeButton>
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

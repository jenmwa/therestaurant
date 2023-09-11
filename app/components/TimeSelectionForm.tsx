import { FormEvent } from "react";
import { Form } from "./styled/Forms";
import { SubmitButton, TimeButton } from "./styled/Buttons";
import { availableParallelism } from "os";

interface ITimeSelectionFormProps {
  handleTime: (time: string) => void;
  handleBooking: (e: FormEvent) => void;
  selectedTime: string | null;
  isTimeSet: boolean;
  userDate: string;
  userGuests: number;
  is18Available: boolean;
  is21Available: boolean;
}

export const TimeSelectionForm = ({
  handleTime,
  handleBooking,
  selectedTime,
  isTimeSet,
  userDate,
  userGuests,
  is18Available,
  is21Available,
}: ITimeSelectionFormProps) => {
  console.log("is18Available: ", is18Available);

  const timeSelectionMessage = () => {
    if (is18Available && is21Available) {
      return "Choose your time:";
    } else if (is18Available) {
      return "Only 18:00 is available:";
    } else if (is21Available) {
      return "Only 21:00 is available:";
    } else {
      return "We're fully booked. Please choose another date.";
    }
  };

  return (
    <>
      <Form onSubmit={handleBooking}>
        {timeSelectionMessage()}
        <div className="btn-wrapper">
          <TimeButton
            isSelected={selectedTime === "18:00"}
            onClick={() => handleTime("18:00")}
            disabled={!is18Available}
          >
            18:00
          </TimeButton>
          <TimeButton
            isSelected={selectedTime === "21:00"}
            onClick={() => handleTime("21:00")}
            disabled={!is21Available}
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

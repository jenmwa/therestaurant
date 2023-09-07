import { ChangeEvent, FormEvent } from "react";
import { TimeSelectionForm } from "./TimeSelectionForm";
import { GuestSelectionForm } from "./GuestSelectionForm";

interface IShowBookTableFormProps {
  handleSubmit: (e: FormEvent) => void;
  handleGuests: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleTime: (time: string) => void;
  handleDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBooking: (e: FormEvent) => void;
  userDate: string;
  userGuests: number;
  selectedTime: string | null;
  isValid: boolean;
  isTimeSet: boolean;
  isGuestFormSubmitted: boolean;
}

export const ShowBookTableForm = ({
  handleSubmit,
  handleDate,
  handleGuests,
  handleTime,
  handleBooking,
  userDate,
  userGuests,
  selectedTime,
  isValid,
  isTimeSet,
  isGuestFormSubmitted,
}: IShowBookTableFormProps) => {
  return (
    <>
      <GuestSelectionForm
        handleDate={handleDate}
        handleGuests={handleGuests}
        handleSubmit={handleSubmit}
        userDate={userDate}
        userGuests={userGuests}
        isValid={isValid}
      ></GuestSelectionForm>
      {isGuestFormSubmitted && (
        <TimeSelectionForm
          handleTime={handleTime}
          handleBooking={handleBooking}
          selectedTime={selectedTime}
          isTimeSet={isTimeSet}
          userDate={userDate}
          userGuests={userGuests}
        ></TimeSelectionForm>
      )}
    </>
  );
};

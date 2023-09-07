import { ChangeEvent, FormEvent } from "react";

interface IGuestSelectionFormProps {
  handleGuests: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleDate: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  userGuests: number;
  userDate: string;
  isValid: boolean;
}

export const GuestSelectionForm = ({
  handleDate,
  handleSubmit,
  handleGuests,
  userGuests,
  userDate,
  isValid,
}: IGuestSelectionFormProps) => {
  return (
    <>
      <form className="form--book-table" onSubmit={handleSubmit}>
        <h3>lets book a table!</h3>
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

        <label>
          Select Date:<br></br>
          <input type="date" value={userDate} onChange={handleDate}></input>
        </label>
        <button type="submit" className="submit-btn" disabled={!isValid}>
          Check Availability
        </button>
      </form>
    </>
  );
};

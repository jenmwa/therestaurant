import { ChangeEvent, FormEvent } from "react";
import { H4 } from "./styled/Headings";
import { Form } from "./styled/Forms";
import { SubmitButton } from "./styled/Buttons";
import { StyledInput } from "./styled/Inputs";

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
      <Form onSubmit={handleSubmit}>
        <H4>lets book a table!</H4>
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
          <StyledInput
            type="date"
            value={userDate}
            onChange={handleDate}
          ></StyledInput>
        </label>
        <SubmitButton type="submit" disabled={!isValid}>
          Check Availability
        </SubmitButton>
      </Form>
    </>
  );
};

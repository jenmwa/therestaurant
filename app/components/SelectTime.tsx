import { Dispatch, SetStateAction } from "react";
import { IAvailability } from "../models/IAvailability";

type Props = {
  availability: IAvailability;
  setSelectedTime: Dispatch<SetStateAction<string>>;
};

export const SelectTime = ({ availability, setSelectedTime }: Props) => {
  if (!availability.availableTables1800 && !availability.availableTables2100) {
    return <div>Inga lediga tider</div>;
  }
  return (
    <div>
      {availability.availableTables1800 && (
        <label>
          <input
            name="time"
            type="radio"
            onChange={(e) => {
              setSelectedTime("18:00");
            }}
          ></input>
          18:00
        </label>
      )}
      {availability.availableTables2100 && (
        <label>
          <input
            name="time"
            type="radio"
            onChange={(e) => {
              setSelectedTime("21:00");
            }}
          ></input>
          21:00
        </label>
      )}
    </div>
  );
};

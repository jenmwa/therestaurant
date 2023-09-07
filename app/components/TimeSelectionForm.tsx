interface ITimeSelectionFormProps {
  handleTime: (time: string) => void;
  selectedTime: string | null;
  isValid: boolean;
}

export const TimeSelectionForm = ({
  handleTime,
  selectedTime,
  isValid,
}: ITimeSelectionFormProps) => {
  return (
    <>
      <div>
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
      </div>
      ;
    </>
  );
};

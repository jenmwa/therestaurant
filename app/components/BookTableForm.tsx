import { ChangeEvent, FormEvent, useState } from "react";
import { CreateBooking } from "../models/CreateBooking";
import { ShowBookTableForm } from "./ShowBookTableForm";
import { createBookings, getBookings } from "../services/BookingService";
import { CustomerForm } from "./CustomerForm";
import { createNewCustomer } from "../services/CustomerService";
import { CreateCustomer } from "../models/CreateCustomer";
import { ICustomer } from "../models/ICustomer";
import { checkAvailability } from "../functions/checkAvailability";
import { ConfirmBooking } from "./ConfirmBooking";

export const BookTableForm = ({ restaurantId }: { restaurantId: string }) => {
  const [userDate, setUserDate] = useState("");
  const [userGuests, setUserGuests] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [isTimeSet, setIsTimeSet] = useState(false);
  const [isGuestFormSubmitted, setIsGuestFormSubmitted] = useState(false);
  const [customerInput, setCustomerInput] = useState<CreateCustomer>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [customer, setCustomer] = useState<ICustomer>();
  const [is18Available, setIs18Available] = useState(false);
  const [is21Available, setIs21Available] = useState(false);
  const [booking, setBooking] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(false);

  function handleChangeCustomerForm(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    setCustomerInput({ ...customerInput, [name]: e.target.value });
  }
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(
      "check availability for : ",
      userGuests + " guests, " + userDate
    );

    const bookingData = await getBookings(restaurantId);

    // getBookings("623b85d54396b96c57bde7c3");
    const availabilityStatus = checkAvailability(bookingData, userDate);
    console.log(availabilityStatus);
    setIs18Available(availabilityStatus.availableTables1800);
    setIs21Available(availabilityStatus.availableTables2100);

    setIsGuestFormSubmitted(true);
  };

  async function handleCreateCustomer(e: FormEvent) {
    e.preventDefault();
    const getCustomerData = await createNewCustomer(customerInput);
    setCustomer(getCustomerData);
    console.log("Object from submit", customerInput);
    setBooking(true);
  }

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    setIsTimeSet(true);
  };

  async function createBooking() {
    if (customer) {
      const newBooking = new CreateBooking(
        restaurantId,
        userDate,
        selectedTime,
        userGuests,
        customer
      );
      createBookings(newBooking);
      setConfirmedBooking(true);
    }
  }

  console.log(customerInput);
  console.log(customer);

  return (
    <>
      <ShowBookTableForm
        handleSubmit={handleSubmit}
        handleGuests={handleGuests}
        handleTime={handleTime}
        handleDate={handleDate}
        handleBooking={handleBooking}
        userDate={userDate}
        userGuests={userGuests}
        selectedTime={selectedTime}
        isValid={isValid}
        isTimeSet={isTimeSet}
        isGuestFormSubmitted={isGuestFormSubmitted}
        is18Available={is18Available}
        is21Available={is21Available}
      ></ShowBookTableForm>
      <CustomerForm
        handleCreateCustomer={handleCreateCustomer}
        handleChangeCustomerForm={handleChangeCustomerForm}
        customerInput={customerInput}
        customer={customer}
      ></CustomerForm>
      {booking && (
        <ConfirmBooking
          customer={customer}
          selectedTime={selectedTime}
          userDate={userDate}
          userGuests={userGuests}
          createBooking={createBooking}
          confirmedBooking={confirmedBooking}
        ></ConfirmBooking>
      )}
    </>
  );
};

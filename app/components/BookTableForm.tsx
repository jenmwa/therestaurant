import { ChangeEvent, FormEvent, useState } from "react";
import { CreateBooking } from "../models/CreateBooking";
import { ShowBookTableForm } from "./ShowBookTableForm";
import { createBookings, getBookings } from "../services/BookingService";
import { CustomerForm } from "./CustomerForm";
import { createNewCustomer } from "../services/CustomerService";
import { CreateCustomer } from "../models/CreateCustomer";
import { ICustomer } from "../models/ICustomer";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      "check availability for : ",
      userGuests + " guests, " + userDate
    );
    getBookings(restaurantId);
    // getBookings("623b85d54396b96c57bde7c3");

    setIsGuestFormSubmitted(true);
  };

  async function handleCreateCustomer(e: FormEvent) {
    e.preventDefault();
    const getCustomerData = await createNewCustomer(customerInput);
    setCustomer(getCustomerData);
    console.log("Object from submit", customerInput);

    //TODO: Submit form uppdaterar inte state vilket gör customer till false vid första klick. Fungerar sedan vid andra klick.
    // refaktorera och bygg om submit funktionalitet.

    if (customer) {
      const booking = new CreateBooking(
        restaurantId,
        userDate,
        selectedTime,
        userGuests,
        customer
      );
      console.log(
        `confirmed booking: ${JSON.stringify(
          booking
        )}, lets continue with customer!`
      );
      createBookings(booking);
      //rendera tack-för-din-bokning
    }
  }

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    setIsTimeSet(true);
  };

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
      ></ShowBookTableForm>
      <CustomerForm
        handleCreateCustomer={handleCreateCustomer}
        handleChangeCustomerForm={handleChangeCustomerForm}
        customerInput={customerInput}
        customer={customer}
      ></CustomerForm>
    </>
  );
};

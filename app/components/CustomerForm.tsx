"use client";

import "../style/customerForm.scss";
import { createNewCustomer } from "../services/CustomerService";
import { ChangeEvent, FormEvent, useState } from "react";
import { CreateCustomer } from "../models/CreateCustomer";
import { ICustomer } from "../models/ICustomer";

export function CustomerForm() {
  const [customer, setCustomer] = useState<CreateCustomer>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [newCustomer, setNewCustomer] = useState<ICustomer>();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    setCustomer({ ...customer, [name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const getCustomerData = await createNewCustomer(customer);
    setNewCustomer(getCustomerData);
    console.log("Object from submit", customer);
  }
  console.log(customer);
  console.log(newCustomer);

  return (
    <section className="customerForm">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={customer.name}
            onChange={handleChange}
            name="name"
            autoFocus
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={customer.lastname}
            onChange={handleChange}
            name="lastname"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={customer.email}
            onChange={handleChange}
            name="email"
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={customer.phone}
            onChange={handleChange}
            name="phone"
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}

"use client";

import "../style/customerForm.scss";
import { ChangeEvent, FormEvent } from "react";
import { CreateCustomer } from "../models/CreateCustomer";
import { ICustomer } from "../models/ICustomer";

interface ICustomerFormProps {
  handleCreateCustomer: (e: FormEvent) => void;
  handleChangeCustomerForm: (e: ChangeEvent<HTMLInputElement>) => void;
  customerInput: CreateCustomer;
  customer: ICustomer | undefined;
}

export function CustomerForm({
  handleCreateCustomer,
  handleChangeCustomerForm,
  customerInput,
  customer,
}: ICustomerFormProps) {
  return (
    <section className="customerForm">
      <form onSubmit={handleCreateCustomer}>
        <label>
          Name:
          <input
            type="text"
            value={customerInput.name}
            onChange={handleChangeCustomerForm}
            name="name"
            autoFocus
          />
        </label>
        <label>
          Lastname:
          <input
            type="text"
            value={customerInput.lastname}
            onChange={handleChangeCustomerForm}
            name="lastname"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={customerInput.email}
            onChange={handleChangeCustomerForm}
            name="email"
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={customerInput.phone}
            onChange={handleChangeCustomerForm}
            name="phone"
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}

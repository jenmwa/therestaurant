"use client";

import "../style/customerForm.scss";
import { ChangeEvent, FormEvent } from "react";
import { CreateCustomer } from "../models/CreateCustomer";
import { ICustomer } from "../models/ICustomer";
import { Form } from "./styled/Forms";
import { Label, StyledInput } from "./styled/Inputs";
import { SubmitButton } from "./styled/Buttons";

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
      <Form onSubmit={handleCreateCustomer}>
        <Label>
          Name:
          <StyledInput
            type="text"
            value={customerInput.name}
            onChange={handleChangeCustomerForm}
            name="name"
            autoFocus
          />
        </Label>
        <Label>
          Lastname:
          <StyledInput
            type="text"
            value={customerInput.lastname}
            onChange={handleChangeCustomerForm}
            name="lastname"
          />
        </Label>
        <Label>
          Email:
          <StyledInput
            type="email"
            value={customerInput.email}
            onChange={handleChangeCustomerForm}
            name="email"
          />
        </Label>
        <Label>
          Phone:
          <StyledInput
            type="tel"
            value={customerInput.phone}
            onChange={handleChangeCustomerForm}
            name="phone"
          />
        </Label>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </section>
  );
}

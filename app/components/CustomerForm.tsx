"use client";

import "../style/customerForm.scss";
import { createCustomer } from "../services/CustomerService";

export function CustomerForm() {
  async function handleClick() {
    let newCustomer = await createCustomer();
    console.log(newCustomer);
  }

  return (
    <section className="customerForm">
      <p>this is customerForm</p>
      <button onClick={handleClick}>Click to create test person</button>
    </section>
  );
}

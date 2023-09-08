import { ICustomer } from "./ICustomer";

export class CreateBooking {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string | null,
    public numberOfGuests: number,
    public customer: ICustomer
  ) { }

}
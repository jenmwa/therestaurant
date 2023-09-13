import { ICustomer } from "./ICustomer";

export class Booking {
  constructor(
    public _id: string,
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customerId: string,
    public customerInfo: ICustomer
  ) {}
}

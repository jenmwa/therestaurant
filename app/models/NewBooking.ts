export class NewBooking {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string | null,
    public numberOfGuests: number,
    // customer: newCustomer {}
  ) { }

}
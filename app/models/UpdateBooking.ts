export class UpdateBooking {
  constructor(
    public id: string,
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customerId: string
  ) {}
}

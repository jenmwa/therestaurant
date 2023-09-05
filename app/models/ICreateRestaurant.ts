export interface ICreateRestaurant {
  name: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
}

export interface IDate {
  date: string,
  guests: number,
  session: ISession[];
}

export interface ISession {
  id: string,
  time: string,
  table: ITable[];
}

export interface ITable {
  id: string,
  seats: number,
  isBooked: boolean
}
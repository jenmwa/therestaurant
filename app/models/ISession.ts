export interface ISession {
  table: ITable
}

export interface ITable {
  id: string,
  isBooked: boolean
}
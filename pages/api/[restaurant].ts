import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const restaurant = {
    "name": "Franzén",
    "address": {
      "street": "Drottninggatan 1",
      "zip": "123 45",
      "city": "Stockholm"  
    }
  }

res.status(200).send(restaurant)

}
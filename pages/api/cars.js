import { cars } from "./data/cars"

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(cars)
  }
}

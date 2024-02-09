import { cars } from "./data/cars"

export default function handler(req, res) {
  res.status(200).json(cars)
  // res.status(200).json({ name: "Jon Doal" })
}

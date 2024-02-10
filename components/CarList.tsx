'use client';
import { getAllCars } from "@/data/getCars";
import { ICar } from "@/types/car";
import { Card } from "./Card";

export const CarList = async () => {
  const cars = await getAllCars();

  return <ul className="list_wrapper">
    { cars.length > 0 && cars.map((car: ICar, index: number) => {
      return <Card key={index} car={car}/>
    }) }
  </ul>
}

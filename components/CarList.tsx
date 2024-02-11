'use client';
import { ICar } from "@/types/car";
import { Card } from "./Card";
import { getAllCars } from "@/data/api";

export const CarList = async () => {
  const cars = await getAllCars();

  return <ul className="list_wrapper">
    { cars.length > 0 && cars.map((car: ICar, index: number) => {
      return <Card key={index} car={car}/>
    }) }
  </ul>
}

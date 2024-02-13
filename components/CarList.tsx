'use client';
import { ICar } from "@/types/car";
import { Card } from "./Card";

interface CarListProps {
  cars?: Array<ICar>;
}

export const CarList = async ({cars}: CarListProps) => {
  return <ul className="list_wrapper">
    { cars!.length > 0 && cars!.map((car: ICar, index: number) => {
      return <Card key={index} car={car}/>
    }) }
  </ul>
}

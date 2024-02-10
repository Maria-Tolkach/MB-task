import { Card } from "@/components/Card";
import { getAllCars } from "@/data/getCars";
import { ICar } from "@/types/car";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cars | Admin App',
}

export default async function Blog() {
  const cars = await getAllCars();
  return <div className="wrapper">
    <h1 className="page_title">NA VÝBĚR JE VELKÉ MNOŽSTVÍ VOZŮ.</h1>
    <button className="button">Přidat</button>
    <ul className="list_wrapper">
      { cars.length > 0 && cars.map((car: ICar, index: number) => {
        return <Card key={index} car={car}/>
      }) }
    </ul>
  </div>
}

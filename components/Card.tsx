import { CarProps } from "@/app/blog/[id]/page";
import Image from "next/image";
import Link from "next/link"

interface CardProps {
  car: CarProps;
}

export const Card = ({car}: CardProps) => {
  return <li className="card">
    <Link href={`/blog/${car.id}`}>
      <Image priority src="/car-exhibition.png" alt="" width={360} height={360}/>
      <h3 className="card_title">{car.car} {car.car_model}</h3>
      <div className="card_model_year">{car.car_model_year}</div>
      <div className="card_color">{car.car_color}</div>
      <div className="price">
        <h6>Katalogová cena vozidla:</h6>
        <div>{car.price}</div>
      </div>
    </Link>
  </li>
}
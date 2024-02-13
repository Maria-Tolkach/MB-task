'use client';
import { ICar } from "@/types/car";
import { EditRow } from "./EditRow";
import Link from "next/link";

interface InfoCarProps {
  car: ICar;
}

export const InfoCar = ({car}: InfoCarProps) => {
  return <div className="card_info">
    <h3 className="card_title">Info:</h3>

    <EditRow name={"Značka vozidla:"} value={car.car} disabled/>
    <EditRow name={"Model:"} value={car.car_model} disabled/>
    <EditRow name={"Rok:"} value={car.car_model_year.toString()} disabled/>
    <EditRow name={"Vin:"} value={car.car_vin} disabled/>
    <EditRow name={"Barva:"} value={car.car_color} disabled/>
    <EditRow name={"Cena:"} value={car.price} disabled/>
    <Link href={`/cars`}><button className="button">Back</button></Link>
  </div>
}

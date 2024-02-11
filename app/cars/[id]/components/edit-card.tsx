'use client';
import { ICar } from "@/types/car"
import { EditRow } from "./edit-row"
import { useState } from "react";

interface EditCardProps {
  car: ICar;
}

export const EditCard = ({car}: EditCardProps) => {
  const [ state, setState ] = useState<ICar>({
    id: car.id,
    car: car.car,
    car_model: car.car_model,
    car_model_year: car.car_model_year,
    car_vin: car.car_vin,
    car_color: car.car_color,
    price: car.price,  
  });

  const onChange = (value: string) => {
    console.log(123, state, value)
  }

  const onSubmit = (value: string) => {
    setState({...state});
  }

  return <div className="card_info">
    <h3 className="card_title">Edit</h3>

    <EditRow name={"Značka vozidla:"} value={car.car} onChange={onChange}/>
    <EditRow name={"Model:"} value={car.car_model} onChange={onChange}/>
    <EditRow name={"Vin:"} value={car.car_vin} onChange={onChange}/>
    <EditRow name={"Barva:"} value={car.car_color} onChange={onChange}/>
    <EditRow name={"Cena:"} value={car.price} onChange={onChange}/>

    <button className="button" onSubmit={() => onSubmit} style={{margin: "unset"}}>Submit</button>
  </div>
}

// 'use client'
import { Metadata } from "next"
import Image from "next/image"
import { EditRow } from "./components/edit-row"
// import React, { useState } from "react"

type Props = {
  params: {
    id: string
  }
}

export type CarProps = {
  id: number;
  car: string;
  car_model: string;
  car_model_year: number;
  car_vin: string;
  car_color: string;
  price: string;  
}

async function getData(id: string) {
  const response = await fetch(`https://myfakeapi.com/api/cars/${id}`)
  const responseJson = response.json();
  const getCar = await responseJson;
  const car = getCar.Car;
  return car;
}

export async function generateMetadata({ params: {id} }: Props ): Promise<Metadata> {
  const car = await getData(id)
  return {
    title: car.car,
  }
}

export default async function Post({ params: {id} }: Props ) {
  const car: CarProps = await getData(id);
  // const [ state, setState ] = useState<CarProps>({
  //   id: car.id,
  //   car: car.car,
  //   car_model: car.car_model,
  //   car_model_year: car.car_model_year,
  //   car_vin: car.car_vin,
  //   car_color: car.car_color,
  //   price: car.price,  
  // });

  const onChange = (value: string) => {
    // setState({...state, car: value })
  }
  // });

  const onSubmit = (value: string) => {
    // setState({...state})
  }

  return <div className="wrapper_car_detail">
    <Image priority src="/space-vector-illustration.jpg" alt="" fill style={{zIndex: "-5"}}/>

    <div className="img">
      <Image priority src="/car-exhibition.png" alt="" width={800} height={800}/>
    </div>

    <div className="card_info">
      <h3 className="card_title">Edit Card</h3>

      <EditRow name={"Značka vozidla:"} text={car.car} onChange={onChange}/>
      <EditRow name={"Model:"} text={car.car_model} onChange={onChange}/>
      <EditRow name={"Vin:"} text={car.car_vin} onChange={onChange}/>
      <EditRow name={"Barva:"} text={car.car_color} onChange={onChange}/>
      <EditRow name={"Cena:"} text={car.price} onChange={onChange}/>

      <button>Submit</button>
    </div>
  </div>
}

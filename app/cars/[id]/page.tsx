import { Metadata } from "next"
import Image from "next/image"
import { getAllCars } from "@/data/api"
import { EditCard } from "./components/edit-card"

type Props = {
  params: {
    id: number
  }
}

export async function generateMetadata({ params: {id} }: Props ): Promise<Metadata> {
  const car = (await getAllCars()).find(car => car.id.toString() === id.toString());
  return {
    title: car ? car.car : "",
  }
}

export default async function Post({ params: {id} }: Props ) {
  const cars = await getAllCars();
  const car = cars.find(car => car.id.toString() === id.toString());
  
  if (!car) return <>No Data Found</>

  return <div className="wrapper_car_detail">
    <Image priority src="/space-vector-illustration.jpg" alt="" fill style={{zIndex: "-5"}}/>
    <div className="img">
      <Image priority src="/car-exhibition.png" alt="" width={800} height={800}/>
    </div>
    <EditCard car={car}/>
  </div>
}

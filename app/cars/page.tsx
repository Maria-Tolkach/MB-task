import { AddNewCar } from "@/components/AddNewCar";
import { CarList } from "@/components/CarList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cars | Admin App',
}

export default function Cars() {
  return <div className="wrapper">
    <h1 className="page_title">A LARGE NUMBER OF CARS TO CHOOSE FROM.</h1>
    <AddNewCar/>
    <CarList/>
  </div>
}

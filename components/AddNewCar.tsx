'use client';
import { FormEvent, useState } from "react"
import { AddCarModal } from "./AddCarModal"
import { ICar } from "@/types/car";

export const AddNewCar = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [ newCar, setNewCar ] = useState<ICar>({
    id: Math.random() * 1000,
    car: "",
    car_model: "",
    car_model_year: 0,
    car_vin: "",
    car_color: "",
    price: "",  
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return <>
    <button className="button" onClick={() => setModalOpen(!modalOpen)}>Přidat</button>
    <AddCarModal modalOpen={modalOpen} 
                 setModalOpen={setModalOpen}
                 car={newCar}
                 onSubmit={onSubmit} />
  </>
}

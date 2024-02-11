'use client';
import { FormEvent, useState } from "react"
import { AddCarModal } from "./AddCarModal"
import { ICar } from "@/types/car";
import { useRouter } from "next/navigation";
import { addCar } from "@/data/api";
import { v4 as uuidv4 } from "uuid";

export const AddNewCar = () => {
  const router = useRouter()
  const carId = uuidv4()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newCar, setNewCar] = useState<ICar>({
    id: carId,
    car: "",
    car_model: "",
    car_model_year: 2024,
    car_vin: "",
    car_color: "",
    price: "",  
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addCar(newCar)
    console.log(111, newCar)
    setNewCar({
      id: carId,
      car: "",
      car_model: "",
      car_model_year: 2024,
      car_vin: "",
      car_color: "",
      price: "",  
    })
    setModalOpen(false)
    router.refresh()
  }

  return <>
    <button className="button" onClick={() => setModalOpen(!modalOpen)}>Přidat</button>
    <AddCarModal modalOpen={modalOpen} 
                 setModalOpen={setModalOpen}
                 car={newCar}
                 setNewCar={setNewCar}
                 onSubmit={onSubmit} />
  </>
}

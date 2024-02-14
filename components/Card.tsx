'use client';
import { ICar } from "@/types/car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { DeleteCarModal } from "./DeleteCarModal";
import { AddEditCarModal } from "./AddEditCarModal";
import { useRouter } from "next/navigation";
import { aditCar, deleteCar } from "@/data/api";

interface CardProps {
  car: ICar;
}

export const Card = ({car}: CardProps) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [editCar, setEditCar] = useState<ICar>({...car});

  const onSubmitEditCar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await aditCar(editCar)
    setOpenModalEdit(false)
    router.refresh()
  }

  const onSubmitDeleteCar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await deleteCar(car.id)
    setOpenModalDelete(false)
    router.refresh()
  }

  return <li className="card">
    <Link href={`/cars/${car.id}`}>
      <Image priority src="/car-exhibition.png" alt="" width={300} height={300}/>
      <div className="content-wrapper">
        <h3 className="card_title">{car.car} {car.car_model}</h3>
        <div className="card_model_year">{car.car_model_year}</div>
        <div className="row">
          <div className="card_item-wrap"><FontAwesomeIcon icon={faCheck}/>{car.car_color}</div>
          <div className="card_item-wrap"><FontAwesomeIcon icon={faCheck}/><span>Světlomety DIGITAL LIGHT</span></div>
        </div>
        <div className="price">
          <span>Katalogová cena vozidla:</span>
          <div>{car.price}</div>
        </div>
      </div>
    </Link>
    <FontAwesomeIcon icon={faEdit} onClick={() => setOpenModalEdit(true)} className="car_edit-icon"/>
    <AddEditCarModal car={editCar} 
                 title="Edit Car"
                 modalOpen={openModalEdit} 
                 setModalOpen={setOpenModalEdit}
                 setNewCar={setEditCar}
                 onSubmit={onSubmitEditCar} />

    <FontAwesomeIcon icon={faTrashCan} onClick={() => setOpenModalDelete(true)} className="car_delete-icon"/>
    <DeleteCarModal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete} onSubmit={onSubmitDeleteCar} title="Are you sure, you want to delete this car?"/>
  </li>
}

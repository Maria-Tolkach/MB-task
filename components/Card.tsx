import { ICar } from "@/types/car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import Link from "next/link"

interface CardProps {
  car: ICar;
}

export const Card = ({car}: CardProps) => {
  return <li className="card">
    <Image priority src="/car-exhibition.png" alt="" width={360} height={360}/>
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
    <Link href={`/cars/${car.id}`}><FontAwesomeIcon icon={faEdit} className="car_edit-icon"/></Link>
    <FontAwesomeIcon icon={faTrashCan} className="car_delete-icon"/>
  </li>
}

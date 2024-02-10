import { EditRow } from "@/app/cars/[id]/components/edit-row"
import { ICar } from "@/types/car"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction } from "react";

interface AddCarModalProps {
  modalOpen: boolean;
  car: ICar;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
}

export const AddCarModal = ({ modalOpen, car, setModalOpen, onSubmit }: AddCarModalProps) => {
  return <div className="modal-wrapper" style={{display: modalOpen ? "unset" : "none"}}>
    <div className="modal">
      <form onSubmit={(e) => onSubmit(e)} className="card_info">
        <FontAwesomeIcon icon={faXmark} className="car_delete-icon" onClick={() => setModalOpen(false)}/>
        <h3 className="card_title">Add Car</h3>

        <EditRow name={"Značka vozidla:"} text={car.car} onChange={() => {}}/>
        <EditRow name={"Model:"} text={car.car_model} onChange={() => {}}/>
        <EditRow name={"Vin:"} text={car.car_vin} onChange={() => {}}/>
        <EditRow name={"Barva:"} text={car.car_color} onChange={() => {}}/>
        <EditRow name={"Cena:"} text={car.price} onChange={() => {}}/>

        <button type="submit" className="button" style={{margin: "unset"}}>Submit</button>
      </form>
    </div>
  </div>
}

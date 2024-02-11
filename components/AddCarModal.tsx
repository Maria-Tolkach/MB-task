import { EditRow } from "@/app/cars/[id]/components/edit-row"
import { ICar } from "@/types/car"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction } from "react";

interface AddCarModalProps {
  modalOpen: boolean;
  car: ICar;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setNewCar: Dispatch<SetStateAction<ICar>>;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
}

export const AddCarModal = ({ modalOpen, car, setModalOpen, setNewCar, onSubmit }: AddCarModalProps) => {
  return <div className="modal-wrapper" style={{display: modalOpen ? "unset" : "none"}}>
    <div className="modal">
      <form onSubmit={(e) => onSubmit(e)} className="card_info">
        <FontAwesomeIcon icon={faXmark} className="car_delete-icon" onClick={() => setModalOpen(false)}/>
        <h3 className="card_title">Add Car</h3>

        <EditRow name={"Značka vozidla:"} value={car.car} onChange={(value) => setNewCar({...car, car: value})}/>
        <EditRow name={"Model:"} value={car.car_model} onChange={(value) => setNewCar({...car, car_model: value})}/>
        {/* <EditRow name={"Rok:"} value={car.car_model_year.toString()} onChange={(value) => setNewCar({...car, car_model_year: Number(value)})}/> */}
        <EditRow name={"Vin:"} value={car.car_vin} onChange={(value) => setNewCar({...car, car_vin: value})}/>
        <EditRow name={"Barva:"} value={car.car_color} onChange={(value) => setNewCar({...car, car_color: value})}/>
        <EditRow name={"Cena:"} value={car.price} onChange={(value) => setNewCar({...car, price: value})}/>

        <button type="submit" className="button" style={{margin: "unset"}}>Submit</button>
      </form>
    </div>
  </div>
}

import { ICar } from "@/types/car"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Dispatch, FormEvent, SetStateAction } from "react";

interface DeleteCarModalProps {
  modalOpen: boolean;
  title: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit(e: FormEvent<HTMLFormElement>): void;
}

export const DeleteCarModal = ({ modalOpen, title, setModalOpen, onSubmit }: DeleteCarModalProps) => {
  return <div className="modal-wrapper" style={{display: modalOpen ? "unset" : "none"}}>
    <div className="modal">
      <form onSubmit={(e) => onSubmit(e)} className="card_info">
        <FontAwesomeIcon icon={faXmark} className="car_delete-icon" onClick={() => setModalOpen(false)}/>
        <h3 className="card_title">{title}</h3>
        <button type="submit" className="button" onSubmit={() => onSubmit} style={{margin: "unset"}}>Yes</button>
      </form>
    </div>
  </div>
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

interface EditRowProps {
  name: string;
  value: string | number;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const EditRow = ({name, value, disabled, onChange}: EditRowProps) => {
  const type = () => {
    if (typeof value === "number") {
      return "number"
    }
    return "text"
  }

  return <div className="row">
    <div>{name}</div>
    <input type={type()} value={value} disabled={disabled} onChange={(event) => onChange?.(event.target.value)}/>
    {disabled ? <></> : <FontAwesomeIcon icon={faPenFancy} className="icon"/>}
  </div>
}

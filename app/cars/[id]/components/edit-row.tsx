import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

interface EditRowProps {
  name: string;
  value: string | number;
  onChange(value: string): void;
}

export const EditRow = ({name, value, onChange}: EditRowProps) => {
  const type = () => {
    // if (typeof value === "string") {
    //   return "text"
    // } else if (typeof value === "number") {
    //   return "number"
    // }
    return "text"
  }

  return <div className="row">
    <div>{name}</div>
    <input type={type()} value={value} onChange={(event) => onChange(event.target.value)}/>
    {/* <input type="text" value={text} /> */}
    <FontAwesomeIcon icon={faPenFancy} className="icon"/>
  </div>
}

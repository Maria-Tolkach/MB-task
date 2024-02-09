import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'

interface EditRowProps {
  name: string;
  text: string;

  onChange(value: string): void;
}

export const EditRow = ({name, text, onChange}: EditRowProps) => {
  return <div className="row">
    <div>{name}</div>
    {/* <input type="text" value={text} onChange={(event) => onChange(event.target.value)}/> */}
    <input type="text" value={text} />
    <FontAwesomeIcon icon={faPenFancy} className="icon"/>
  </div>
}

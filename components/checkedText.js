import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function CheckedText(props) {
  return (
    <div>
        <p className='text py-3'><FontAwesomeIcon className='text-custom3-600 pr-4' icon={faCheck} />{props.text}</p>
    </div>
  )
}

export default CheckedText
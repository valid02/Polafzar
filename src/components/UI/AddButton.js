import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classes from './AddButton.module.css';

const AddButton = ({ onClick, text, type, disabled }) => {
  return (
    <button
      className={classes['add-button']}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}
      style={{cursor: disabled ? 'not-allowed' : 'pointer'}}
    >
      <FontAwesomeIcon icon={faPlus} className={classes['add-button__icon']} />
      {text}
    </button>
  );
};

export default AddButton;
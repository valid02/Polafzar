import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './IconBtn.module.css';

const IconBtn = ({ onClick, type, icon }) => {
  return (
    <button className={classes['icon-btn']} onClick={onClick} type={type || 'button'}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconBtn;

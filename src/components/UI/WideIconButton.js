import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './WideIconButton.module.css';

const WideIconButton = ({ onClick, text, type, disabled, icon, className }) => {
  const buttonClasses = disabled ? `${classes['wide-icon-button']} ${classes['disabled']} ${className}` : `${classes['wide-icon-button']} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type || 'button'}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} className={classes['wide-icon-button__icon']} />}
      {text}
    </button>
  );
};

export default WideIconButton;
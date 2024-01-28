import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CategoryItem.module.css';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const CategoryItem = ({ icon, title, isEditable, editbtnClicked }) => {
  const editbtnHandler = () => {
    editbtnClicked(title);
  }

  return (
    <li className={isEditable ? classes['category-item-editable'] : classes['category-item']}>
      <span> <FontAwesomeIcon icon={icon} /> {title} </span>
      {isEditable && (
        <button
        className={classes['category-edit-btn']}
        title='ویرایش'
        type='button'
        onClick={editbtnHandler}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}
    </li>
  );
};

export default CategoryItem;
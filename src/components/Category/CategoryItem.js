import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CategoryItem.module.css';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const CategoryItem = ({ icon, title, isEditable }) => {
  let item = (
    <li className={classes['category-item']}>
      <FontAwesomeIcon icon={icon} /> {title}
    </li>
  );
  if (isEditable) {
    item = (
      <li className={classes['category-item-editable']}>
        <span> <FontAwesomeIcon icon={icon} /> {title} </span>
        <button className={classes['category-edit-btn']} title='ویرایش'><FontAwesomeIcon icon={faPen} /></button>
      </li>
    );
  }

  return item;
};

export default CategoryItem;
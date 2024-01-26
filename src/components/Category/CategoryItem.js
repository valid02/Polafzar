import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CategoryItem.module.css';

const CategoryItem = ({ icon, title }) => {
  return (
    <li className={classes['category-item']}>
      <FontAwesomeIcon icon={icon} /> {title}
    </li>
  );
};

export default CategoryItem;
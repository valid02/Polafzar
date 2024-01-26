import CategoryItem from './CategoryItem';
import classes from './CategoryList.module.css';

const CategoryList = ({ categories }) => {
  return (
    <ul className={classes['category-list']}>
      {categories.map((category, index) => (
        <CategoryItem key={index} {...category} />
      ))}
    </ul>
  );
};

export default CategoryList;
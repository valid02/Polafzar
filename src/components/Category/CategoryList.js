import CategoryItem from './CategoryItem';
import classes from './CategoryList.module.css';

const CategoryList = ({ categories, editbtnClicked }) => {
  const editBtnHamdler = (index) => {
    editbtnClicked(index);
  }

  return (
    <ul className={classes['category-list']}>
      {categories.map((category, index) => (
        <CategoryItem key={index} {...category} index={index} editbtnClicked={editBtnHamdler} />
      ))}
    </ul>
  );
};

export default CategoryList;
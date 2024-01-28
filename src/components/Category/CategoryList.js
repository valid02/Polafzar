import CategoryItem from './CategoryItem';
import classes from './CategoryList.module.css';

const CategoryList = ({ categories, editbtnClicked }) => {
  const editBtnHamdler = (title) => {
    editbtnClicked(title);
  }

  return (
    <ul className={classes['category-list']}>
      {categories.map((category, index) => (
        <CategoryItem key={index} {...category} editbtnClicked={editBtnHamdler} />
      ))}
    </ul>
  );
};

export default CategoryList;
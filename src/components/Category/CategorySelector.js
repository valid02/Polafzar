import { useState } from 'react';
import classes from './CategorySelector.module.css';
import IconBtn from '../UI/IconBtn';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CategorySearch from './CategorySearch';
import CategoryList from './CategoryList';
import AddButton from '../UI/AddButton';

const CategorySelector = ({ categories, isAddingCategory, closeModal, editbtnClicked }) => {
  const [searchedCategories, setSearchedCategories] = useState(categories);

  const handleSearch = searchTerm => {
    const filteredCategories = categories.filter(category =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
    setSearchedCategories(filteredCategories);
  };

  const isAddingCategoryHandler = () => {
    isAddingCategory(true);
  }

  const editBtnHandler = (index) => {
    editbtnClicked(index);
  }

  return (
    <div className={classes['category-selector']}>
      <header className={classes['category-selector__header']}>
        <IconBtn onClick={closeModal} icon={faXmark} />
        <h2 className={classes['category-selector__title']}>دسته بندی ها</h2>
      </header>
      <div className={classes['category-selector__content']}>
        <CategorySearch onSearch={handleSearch} />
        <p className={classes['category-selector__lable']}>دسته بندی ها</p>
        <CategoryList categories={searchedCategories} editbtnClicked={editBtnHandler} />
        <AddButton onClick={isAddingCategoryHandler} text="افزودن دسته بندی دلخواه" />
      </div>
    </div>
  );
}
 
export default CategorySelector;
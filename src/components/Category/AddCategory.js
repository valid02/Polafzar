import { faAngleLeft, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../UI/IconBtn';
import classes from './AddCategory.module.css';
import { useState } from "react";
import WideIconButton from '../UI/WideIconButton';

const AddCategory = ({ goBackHandler , newCategoryHandler, closeModal  }) => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const handleBackButtonClick = () => {
    goBackHandler(false);
  }

  const addCategoryHandler = event => {
    event.preventDefault();
    newCategoryHandler(enteredCategory.trim());
  }

  return (
    <>
      <header className={classes['add-category__header']}>
        <IconBtn onClick={closeModal} icon={faXmark} />
        <h2 className={classes['add-category__title']}>افزودن دسته بندی</h2>
        <IconBtn onClick={handleBackButtonClick} icon={faAngleLeft} />
      </header>
      <div className={classes['add-category__content']}>
        <form onSubmit={addCategoryHandler}>
          <div className={classes['add-category__control']}>
            <label>نام دسته بندی</label>
            <input type="text" onChange={e => setEnteredCategory(e.target.value)} maxLength={20} />
            <span>{enteredCategory.length}/20</span>
          </div>
          <div className={classes['add-category__control']}>
            <WideIconButton type="submit" icon={faPlus} onClick={addCategoryHandler} text="افزودن" disabled={!enteredCategory} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCategory;
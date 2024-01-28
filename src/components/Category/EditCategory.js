import { faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import IconBtn from '../UI/IconBtn';
import classes from './EditCategory.module.css';
import { useState } from "react";
import AddButton from '../UI/AddButton';

const EditCategory = ({ goBackHandler , editedCategory, closeModal }) => {
  const [enteredCategory, setEnteredCategory] = useState('');

  const handleBackButtonClick = () => {
    goBackHandler(false);
  }

  const editCategoryHandler = event => {
    event.preventDefault();
    editedCategory(enteredCategory.trim());
  }

  return (
    <>
      <header className={classes['edit-category__header']}>
        <IconBtn onClick={closeModal} icon={faXmark} />
        <h2 className={classes['edit-category__title']}>ویرایش</h2>
        <IconBtn onClick={handleBackButtonClick} icon={faAngleLeft} />
      </header>
      <div className={classes['edit-category__content']}>
        <form onSubmit={editCategoryHandler}>
          <div className={classes['edit-category__control']}>
            <label>نام دسته بندی</label>
            <input type="text" onChange={e => setEnteredCategory(e.target.value)} maxLength={20} />
            <span>{enteredCategory.length}/20</span>
          </div>
          <div className={classes['edit-category__control']}>
            <AddButton onClick={editCategoryHandler} text="تأیید" disabled={!enteredCategory} />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCategory;
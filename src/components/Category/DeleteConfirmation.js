import { faAngleLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import IconBtn from "../UI/IconBtn";
import classes from './DeleteConfirmation.module.css';
import WideIconButton from "../UI/WideIconButton";

const DeleteConfirmation = ({ goBackHandler, closeModal, confrimDelete  }) => {

  const handleBackButtonClick = () => {
    goBackHandler(false);
  }

  const confrimDeleteHandler = () => {
    confrimDelete();
  }

  return (
    <>
      <header className={classes['delete-confirmation__header']}>
        <IconBtn onClick={closeModal} icon={faXmark} />
        <h2 className={classes['delete-confirmation__title']}>حذف دسته بندی</h2>
        <IconBtn onClick={handleBackButtonClick} icon={faAngleLeft} />
      </header>
      <div className={classes['delete-confirmation__content']}>
        <p>از حذف این دسته بندی مطمئن هستید؟</p>
        <WideIconButton onClick={confrimDeleteHandler} text="حذف کردن" className={classes['delete-confirmation__delete-btn']} />
      </div>
    </>
  );
}
 
export default DeleteConfirmation;
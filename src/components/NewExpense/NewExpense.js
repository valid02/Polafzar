import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import classes from "./NewExpense.module.css";
import CategorySelector from "../Category/CategorySelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const NewExpense = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={classes['new-expense']}>
      <form>
        <div className={classes['new-expense__controls']}>
          <div className={classes['new-expense__control']}>
            <label htmlFor="title">عنوان</label>
            <input className={classes['new-expense__input']} type="text" id="title" />
          </div>
          <div className={classes['new-expense__control']}>
            <label htmlFor="amount">مبلغ</label>
            <input className={classes['new-expense__input']} type="number" id="amount" />
          </div>
          <div className={classes['new-expense__control']}>
            <label htmlFor="date">تاریخ</label>
            <DatePicker
              containerStyle={{
                width: '100%',
              }}
              editable={false}
              inputClass={classes['new-expense__input']}
              // className={props.checkedToggle ? 'bg-dark' : ''}
              weekDays={weekDays}
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              // onChange={setEnteredDate}
              // value={enteredDate}
            />
          </div>
          <div className={classes['new-expense__control']}>
            <label htmlFor="description">توضیحات</label>
            <textarea id="description" cols="30" rows="3"></textarea>
          </div>
          <div className={classes['new-expense__control']}>
            <button className={classes['new-expense__btn']} type="button" onClick={openModal}>
            <FontAwesomeIcon icon={faBars} className={classes['new-expense__icon']} />
              انتخاب دسته بندی
            </button>
            { isModalOpen && <CategorySelector closeModal={closeModal} />}
          </div>
        </div>
        <div className={classes['new-expense__actions']}>
          <button className={classes['new-expense__button']} type="submit">افزودن</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import classes from "./NewExpense.module.css";

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

const NewExpense = () => {
  return (
    <div className={classes['new-expense']}>
      <form>
        <div className={classes['new-expense__controls']}>
          <div className={classes['new-expense__control']}>
            <label htmlFor="title">عنوان</label>
            <input type="text" id="title" />
          </div>
          <div className={classes['new-expense__control']}>
            <label htmlFor="amount">مبلغ</label>
            <input type="number" id="amount" />
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
        </div>
        <div className={classes['new-expense__actions']}>
          <button className={classes['new-expense__button']} type="submit">افزودن</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;

import classes from "./NewExpense.module.css";

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
            <input type="date" id="date" />
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

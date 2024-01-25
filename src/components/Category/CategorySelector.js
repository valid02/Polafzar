import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './CategorySelector.module.css';
import { faAngleLeft, faBowlFood, faCouch, faDisplay, faFileInvoiceDollar, faGift, faGraduationCap, faHandHoldingHeart, faHouseChimney, faLeaf, faMoneyBillTransfer, faMoneyBillTrendUp, faPersonSwimming, faPlaneUp, faPlus, faReceipt, faScrewdriverWrench, faShapes, faShirt, faStar, faStethoscope, faTaxi, faUmbrellaBeach, faWifi, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactDOM from 'react-dom';

let categories = [
  { title:'خوراکی و مواد غذایی', icon: faBowlFood},
  { title:'قسط و بدهی', icon: faFileInvoiceDollar},
  { title:'اینترنت و شارژ', icon: faWifi},
  { title:'حمل و نقل', icon: faTaxi},
  { title:'هزینه های خودرو', icon: faScrewdriverWrench},
  { title:'قبض', icon: faReceipt},
  { title:'سلامت و درمان', icon: faStethoscope},
  { title:'پوشاک و لوازم شخصی', icon: faShirt},
  { title:'آرایش و بهداشت', icon: faLeaf},
  { title:'لوازم منزل', icon: faCouch},
  { title:'کالای دیجیتال', icon: faDisplay},
  { title:'قرض به دیگران', icon: faMoneyBillTransfer},
  { title:'خیریه', icon: faHandHoldingHeart},
  { title:'تفریح و سرگرمی', icon: faUmbrellaBeach},
  { title:'هزینه مسکن و اجاره', icon: faHouseChimney},
  { title:'سرمایه گذاری', icon: faMoneyBillTrendUp},
  { title:'آموزش', icon: faGraduationCap},
  { title:'مسافرت', icon: faPlaneUp},
  { title:'ورزش', icon: faPersonSwimming},
  { title:'هدیه و عیدی', icon: faGift},
  { title:'متفرقه', icon: faShapes}
];

const Backdrop = props => {
  return <div className={classes['backdrop']} onClick={props.closeModal} />;
};

const SelectCategory = props => {
  const [searchCategory, setSearchCategory] = useState('');

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const categoryList = filteredCategories.map((category, index) => (
    <li key={index}>
      <FontAwesomeIcon icon={category.icon} /> {category.title}
    </li>
  ));

  const addCategoryHandler = () => {
    props.addCategory(true);
  }

  return (
    <div className={classes['modal__categories']}>
      <header className={classes['modal__header']}>
        <button className={classes['modal__close-btn']} onClick={props.closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className={classes['modal__title']}>دسته بندی ها</h2>
      </header>
      <div className={classes['modal__content']}>
        <div>
          <input type="text" value={searchCategory} onChange={e => setSearchCategory(e.target.value)} placeholder="جستجوی دسته بندی" className={classes['modal__input']} />
        </div>
        <p className={classes['modal__lable']}>دسته بندی ها</p>
        <ul className={classes['modal__list']}>{categoryList}</ul>
        <button className={classes['modal__add-category-btn']} onClick={addCategoryHandler}>
          <FontAwesomeIcon icon={faPlus} className={classes['modal__add-category-icon']} />
          افزودن دسته بندی دلخواه
        </button>
      </div>
    </div>
  );
};

const AddCategory = props => {
  const [newCategory, setNewCategory] = useState('');
  const backBtnHandler = () => {
    props.back(false);
  }

  const newCategoryHandler = event => {
    event.preventDefault();
    props.newCategory(newCategory);
  }

  return (
    <div>
      <header className={classes['modal__header']}>
        <button className={classes['modal__close-btn']} onClick={props.closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2 className={classes['modal__title']}>افزودن دسته بندی</h2>
        <button className={classes['modal__close-btn']} onClick={backBtnHandler}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
      </header>
      <div className={classes['modal__content']}>
        <form onSubmit={newCategoryHandler}>
          <div className={classes['modal__control']}>
            <label>نام دسته بندی</label>
            <input type="text" className={classes['modal__input']} onChange={e => setNewCategory(e.target.value)} />
          </div>
          <div className={classes['modal__control']}>
            <button className={classes['modal__add-category-btn']} onClick={newCategoryHandler}>
              <FontAwesomeIcon icon={faPlus} className={classes['modal__add-category-icon']} />
              افزودن 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const ModalOverlay = props => {
  const [addCategory, setAddCategory] = useState(false);

  const addNewCategory = (newCategory) => {
    if (newCategory.trim().length > 0) {
      categories = [
        ...categories,
        { title: newCategory, icon: faStar },
      ];
      setAddCategory(false);
    }
  }

  return (
    <div className={classes['modal']}>
      {!addCategory && <SelectCategory closeModal={props.closeModal} addCategory={setAddCategory} />}
      {addCategory && <AddCategory closeModal={props.closeModal} back={setAddCategory} newCategory={addNewCategory} />}
    </div>
  );
};

const CategorySelector = (props) => {
  

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} newCategory={props.newCategory} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default CategorySelector;

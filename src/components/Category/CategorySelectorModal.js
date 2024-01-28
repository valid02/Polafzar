import classes from './CategorySelectorModal.module.css';
import { faBowlFood, faCouch, faDisplay, faFileInvoiceDollar, faGift, faGraduationCap, faHandHoldingHeart, faHouseChimney, faLeaf, faMoneyBillTransfer, faMoneyBillTrendUp, faPersonSwimming, faPlaneUp, faReceipt, faScrewdriverWrench, faShapes, faShirt, faStar, faStethoscope, faTaxi, faUmbrellaBeach, faWifi } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CategorySelector from './CategorySelector';
import AddCategory from './AddCategory';

let categories = [
  { title:'خوراکی و مواد غذایی', icon: faBowlFood, isEditable: false},
  { title:'قسط و بدهی', icon: faFileInvoiceDollar, isEditable: false},
  { title:'اینترنت و شارژ', icon: faWifi, isEditable: false},
  { title:'حمل و نقل', icon: faTaxi, isEditable: false},
  { title:'هزینه های خودرو', icon: faScrewdriverWrench, isEditable: false},
  { title:'قبض', icon: faReceipt, isEditable: false},
  { title:'سلامت و درمان', icon: faStethoscope, isEditable: false},
  { title:'پوشاک و لوازم شخصی', icon: faShirt, isEditable: false},
  { title:'آرایش و بهداشت', icon: faLeaf, isEditable: false},
  { title:'لوازم منزل', icon: faCouch, isEditable: false},
  { title:'کالای دیجیتال', icon: faDisplay, isEditable: false},
  { title:'قرض به دیگران', icon: faMoneyBillTransfer, isEditable: false},
  { title:'خیریه', icon: faHandHoldingHeart, isEditable: false},
  { title:'تفریح و سرگرمی', icon: faUmbrellaBeach, isEditable: false},
  { title:'هزینه مسکن و اجاره', icon: faHouseChimney, isEditable: false},
  { title:'سرمایه گذاری', icon: faMoneyBillTrendUp, isEditable: false},
  { title:'آموزش', icon: faGraduationCap, isEditable: false},
  { title:'مسافرت', icon: faPlaneUp, isEditable: false},
  { title:'ورزش', icon: faPersonSwimming, isEditable: false},
  { title:'هدیه و عیدی', icon: faGift, isEditable: false},
  { title:'متفرقه', icon: faShapes, isEditable: false}
];


const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = props => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const addNewCategoryHandler = (newCategoryValue) => {
    const isDuplicateCategory = (categories, newCategoryTitle) => {
      return categories.some(category => (category.isEditable && category.title === newCategoryTitle));
    }

    if (newCategoryValue.length > 0) {
      if (isDuplicateCategory(categories, newCategoryValue)) {
        alert('دسته بندی تکراری');
      }
      else {
        categories = [
          ...categories,
          { title: newCategoryValue, icon: faStar, isEditable: true },
        ];
        setIsAddingCategory(prevState => !prevState);
      }
    }
  }

  return (
    <div className={classes.modal}>
      {!isAddingCategory && (
        <CategorySelector
          closeModal={props.closeModal}
          isAddingCategory={setIsAddingCategory}
          categories={categories}
        />
      )}
      {isAddingCategory && (
        <AddCategory
          closeModal={props.closeModal}
          goBackHandler={() => setIsAddingCategory(prevState => !prevState)}
          newCategoryHandler={addNewCategoryHandler}
        />
      )}
    </div>
  );
};


const CategorySelectorModal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.closeModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={props.closeModal} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
 
export default CategorySelectorModal;
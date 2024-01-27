import classes from './CategorySelectorModal.module.css';
import { faBowlFood, faCouch, faDisplay, faFileInvoiceDollar, faGift, faGraduationCap, faHandHoldingHeart, faHouseChimney, faLeaf, faMoneyBillTransfer, faMoneyBillTrendUp, faPersonSwimming, faPlaneUp, faReceipt, faScrewdriverWrench, faShapes, faShirt, faStar, faStethoscope, faTaxi, faUmbrellaBeach, faWifi } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CategorySelector from './CategorySelector';
import AddCategory from './AddCategory';

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
  return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = props => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const addNewCategoryHandler = (newCategoryValue) => {
    if (newCategoryValue.trim().length > 0) {
      categories = [
        ...categories,
        { title: newCategoryValue, icon: faStar },
      ];
      setIsAddingCategory(prevState => !prevState);
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
import classes from './CategorySelectorModal.module.css';
import { faBowlFood, faCouch, faDisplay, faFileInvoiceDollar, faGift, faGraduationCap, faHandHoldingHeart, faHouseChimney, faLeaf, faMoneyBillTransfer, faMoneyBillTrendUp, faPersonSwimming, faPlaneUp, faReceipt, faScrewdriverWrench, faShapes, faShirt, faStar, faStethoscope, faTaxi, faUmbrellaBeach, faWifi } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import CategorySelector from './CategorySelector';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import DeleteConfirmation from './DeleteConfirmation';

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
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [isDeleteCategory, setIsDeleteCategory] = useState(false);
  const [editCategoryIndex, setEditCategoryIndex] = useState(null);

  const findDuplicateCategory = (categories, newCategoryTitle) => {
    let index = -1;
    let isDuplicate = false;
  
    categories.forEach((category, i) => {
      if (category.isEditable && category.title === newCategoryTitle) {
        isDuplicate = true;
        index = i;
      }
    });
  
    return { isDuplicate, index };
  };
  

  const addNewCategoryHandler = (newCategoryValue) => {

    if (newCategoryValue.length > 0) {
      if (findDuplicateCategory(categories, newCategoryValue).isDuplicate) {
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

  const handleEditCategory = (categoryTitle) => {
    const { isDuplicate, index } = findDuplicateCategory(categories, categoryTitle);
    
    if (categoryTitle.length > 0) {
      if (isDuplicate && index === editCategoryIndex) {
        setIsEditCategory(prevState => !prevState);
        setEditCategoryIndex(null);
      }
      else if (isDuplicate) {
        alert('دسته بندی تکراری');
      }
      else {
        categories[editCategoryIndex].title = categoryTitle;
        setIsEditCategory(prevState => !prevState);
        setEditCategoryIndex(null);
      }
    }
  }

  const editBtnHandler = (index) => {
    setIsEditCategory(prevState => !prevState);
    setEditCategoryIndex(index);
  }
  
  const handleDeleteCategory = () => {
    setIsEditCategory(prevState => !prevState);
    setIsDeleteCategory(prevState => !prevState);
  }

  const confrimDeleteHandler = () => {
    categories.splice(editCategoryIndex, 1);
    setIsDeleteCategory(prevState => !prevState);
    setEditCategoryIndex(null);
  }

  return (
    <div className={classes.modal}>
      {!isAddingCategory && !isEditCategory && !isDeleteCategory && (
        <CategorySelector
          closeModal={props.closeModal}
          isAddingCategory={setIsAddingCategory}
          categories={categories}
          editbtnClicked={editBtnHandler}
        />
      )}
      {isAddingCategory && (
        <AddCategory
          closeModal={props.closeModal}
          goBackHandler={() => setIsAddingCategory(prevState => !prevState)}
          newCategoryHandler={addNewCategoryHandler}
        />
      )}
      {isEditCategory && (
        <EditCategory
          closeModal={props.closeModal}
          goBackHandler={() => setIsEditCategory(prevState => !prevState)}
          editedCategory={handleEditCategory}
          deletedCategory={handleDeleteCategory}
        />
      )}
      {isDeleteCategory && (
        <DeleteConfirmation
          closeModal={props.closeModal}
          goBackHandler={() => {
            setIsDeleteCategory(prevState => !prevState);
            setIsEditCategory(prevState => !prevState);
          }}
          confrimDelete={confrimDeleteHandler}
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
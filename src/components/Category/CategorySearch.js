import { useState } from 'react';
import classes from './CategorySearch.module.css';

const CategorySearch = ({ onSearch }) => {
  const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = event => {
    setSearchCategory(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div>
      <input
        className={classes['category-search']}
        type="text"
        value={searchCategory}
        onChange={handleSearch}
        placeholder="جستجوی دسته بندی"
      />
    </div>
  );
};

export default CategorySearch;

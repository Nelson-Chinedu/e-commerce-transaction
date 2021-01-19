import React from 'react';
import {Input} from 'antd';

const {Search} = Input;

const SearchBox = ({onSearch, handleSearch}) => {
  return (
    <>
      <Search 
        placeholder="Search Patient" 
        enterButton 
        onSearch={onSearch} 
        onChange={handleSearch} 
        className="c-sidebar-search" 
      />
    </>
  )
};

export default SearchBox;

import React from 'react';
import {Select} from 'antd';

const {Option} = Select;

const Gender = ({handleSelect}) => {
  return(
    <>
      <Select 
        className="c-container-dropdown" 
        defaultValue="Choose One" 
        onChange={handleSelect}
      >
        <Option value="all">All</Option>
        <Option value="Male">Male</Option>
        <Option value="Female">Female</Option>
        <Option value="Prefer to skip">Prefer to skip</Option>
      </Select>
    </>
  )
};

export default Gender;
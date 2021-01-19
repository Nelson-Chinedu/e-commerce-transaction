import React from 'react';
import {Divider} from 'antd';

import Gender from './Gender';
import PaymentMethod from './PaymentMethod';
import SearchBox from './Search';

const Sidebar = ({onSearch, handleSearch, handleSelect}) => {
  return(
    <>
      <SearchBox onSearch={onSearch} handleSearch={handleSearch} />  
      <Divider orientation="left">
        Filter
      </Divider>
      <>
        <p>Payment Method</p>
        <PaymentMethod handleSelect={handleSelect} />
      </>
      <>
        <p>Gender</p>
        <Gender handleSelect={handleSelect} />
      </>
    </>
  )
};

export default Sidebar;

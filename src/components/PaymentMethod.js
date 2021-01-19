import React from 'react';
import {Select} from 'antd';

const {Option} = Select;

const PaymentMethod = ({handleSelect}) => {
  return (
    <>
      <Select 
        className="c-container-dropdown" 
        defaultValue="Choose One" 
        onChange={handleSelect}
      >
        <Option value="all">All</Option>
        <Option value="paypal">Paypal</Option>
        <Option value="money order">Money Order</Option>
        <Option value="check">Check</Option>
        <Option value="cc">CC</Option>
      </Select>
    </>
  )
}

export default PaymentMethod;
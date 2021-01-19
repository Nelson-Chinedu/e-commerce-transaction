import React from 'react';
import {Modal} from 'antd';


const Dialog = ({
  isModalVisible, 
  handleOk, 
  handleCancel, 
  firstName, 
  lastName, 
  email,
  gender,
  phoneNumber,
  userName,
  paymentMethod,
  creditCardNumber,
  creditCardType,
  lastLogin
}) => {
  return (
    <>
      <Modal 
        title="User Detail" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <p><strong>Fullname:</strong> {firstName} {lastName}</p>
        <p><strong>Email Address:</strong> {email}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Username:</strong> {userName}</p>
        <p><strong>Payment Method:</strong> {paymentMethod}</p>
        <p><strong>Credit Card Type:</strong> {creditCardType}</p>
        <p><strong>Credit Card Number:</strong> {creditCardNumber}</p>
        <p><strong>Last Login:</strong> {lastLogin}</p>
      </Modal>
    </>
  )
};

export default Dialog;

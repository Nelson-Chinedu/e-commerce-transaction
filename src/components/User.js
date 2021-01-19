import React, {useState} from 'react';
import {Result} from 'antd';

import Dialog from './Dialog';

const User = ({record}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [lastLogin, setLastLogin] = useState('');
  const [creditCardType, setCreditCardType] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const _showUserRecord = () => {
    setFirstName(record[0].FirstName);
    setLastName(record[0].LastName);
    setGender(record[0].Gender);
    setEmail(record[0].Email);
    setPhoneNumber(record[0].PhoneNumber);
    setUserName(record[0].UserName);
    setPaymentMethod(record[0].PaymentMethod);
    setLastLogin(record[0].LastLogin);
    setCreditCardType(record[0].CreditCardType);
    setCreditCardNumber(record[0].CreditCardNumber);

    setIsModalVisible(true)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (record.length === 0) {
    return (
      <>
        <Result 
          status="404" 
          title="404" 
          subTitle="Sorry, user not found" 
        />
      </>
    )
  };

  return (
    <>
      <div className="c-container-record" key={record[0].UserName}>
        <div className="c-container-record-avatar">
          <img src="/avatar.png" alt="avatar" />
        </div>
        <p>{record[0].FirstName} {record[0].LastName}</p>
        <p>{record[0].Gender}</p>
        <button 
          className="btn" 
          onClick={() => _showUserRecord(record)}
        >
          View User Detail
        </button> 
      </div>
      <Dialog 
        isModalVisible={isModalVisible}
        handleOk={handleOk} 
        handleCancel={handleCancel}
        firstName={firstName}
        lastName={lastName}
        email={email}
        gender={gender}
        phoneNumber={phoneNumber}
        userName={userName}
        paymentMethod={paymentMethod}
        creditCardType={creditCardType}
        creditCardNumber={creditCardNumber}
        lastLogin={lastLogin}
      />
    </>
  )
};

export default User;

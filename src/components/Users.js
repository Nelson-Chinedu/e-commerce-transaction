import React, {useState} from 'react';
import {Modal} from 'antd';
import Dialog from './Dialog';


const Users = ({records}) => {
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


  const _showUserRecord = (record) => {
    setFirstName(record.FirstName);
    setLastName(record.LastName);
    setGender(record.Gender);
    setEmail(record.Email);
    setPhoneNumber(record.PhoneNumber);
    setUserName(record.UserName);
    setPaymentMethod(record.PaymentMethod);
    setLastLogin(record.LastLogin);
    setCreditCardType(record.CreditCardType);
    setCreditCardNumber(record.CreditCardNumber);

    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {records.map((record) => {
        return (
          <div className="c-container-record" key={record.UserName}>
            <div className="c-container-record-avatar">
              <img src="/avatar.png" alt="avatar" />
            </div>
            <p>{record.FirstName} {record.LastName}</p>
            <p>{record.Gender}</p>
            <button className="btn" onClick={() => _showUserRecord(record)}>View User Detail</button> 
          </div>
        )
      })}
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
  );
};

export default Users;

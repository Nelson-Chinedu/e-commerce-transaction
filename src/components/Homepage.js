import React, {useState, useEffect} from 'react';
import {Pagination, BackTop} from 'antd';

import Loading from './Loading';
import Users from './Users';
import User from './User';
import Sidebar from './Sidebar';

const Homepage = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestPerPage] = useState(20);
  const [user, setUser] = useState('');
  const [searchText, setSearchText] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  

  useEffect(() => {
    const data = async () => {
      setLoading(false);
      const response = await fetch('https://api.enye.tech/v1/challenge/records');
      const {records: {profiles}} = await response.json();
      setRecords(profiles);
    }
    data();
  },[]);

  if (records.length === 0 || loading) {
    return (
      <Loading />
    )
  }

  const handleChange = async (page) => {
    setCurrentPage(page);
  }

  const indexOfLastPost = currentPage * requestPerPage;
  const indexOfFirstPost = indexOfLastPost - requestPerPage
  const currentRequest = records.slice(indexOfFirstPost, indexOfLastPost)
  const currentPayment = paymentMethod.slice(indexOfFirstPost, indexOfLastPost);

  const total = Math.ceil(records.length / 20);
  const total2 = Math.ceil(paymentMethod.length / 20);

  const _onSearch = (value) => {
    const fullname = value.split(' ');
    const firstName = fullname[0].charAt(0).toUpperCase() + fullname[0].slice(1);
    const userData = records.filter((user) => (
      user.FirstName === `${firstName}`
    ));
    setUser(userData);
  }

  const handleSearch = (e) => {
    const { value } = e.currentTarget;
    setUser('')
    setSearchText(value);
  };

  const _handleSelect = (value) => {
    setLoading(true);
    if (value === "all"){
      setLoading(false);
      setPaymentMethod('');
    }else {
      const selectedUsers = records.filter((user) => (
        user.PaymentMethod === value || user.Gender === value
      ));
      setLoading(false);
      setPaymentMethod(selectedUsers);
    }
  }

  return (
    <>
      <div className="c-container">
        <div className="sidebar">
          <Sidebar 
            onSearch={_onSearch} 
            handleSearch={handleSearch} 
            handleSelect={_handleSelect} 
          />
        </div>
        {!paymentMethod ? (
          <div className="c-container-wrapper">
            <div className="c-container-wrapper-top">
              <h2>Transaction Record</h2>
              <Pagination 
                current={currentPage} 
                onChange={handleChange} 
                total={`${total}0`} 
                showSizeChanger={false} 
                showTotal= {records => `${currentPage} of ${records}`}
              />
            </div>
            {!user || !searchText ? (
              <Users records={currentRequest} />
            ) : (
              <User record={user} />
            )}
            <div className="c-container-wrapper-bottom">
              <Pagination 
                current={currentPage} 
                onChange={handleChange} 
                total={`${total}0`} 
                showSizeChanger={false} 
                showTotal= {records => `${currentPage} of ${records}`}
              />
            </div>
          </div>
        ) : (
        <div className="c-container-wrapper">
          <div className="c-container-wrapper-top">
            <h2>Transaction Record</h2>
              <Pagination 
                current={currentPage} 
                onChange={handleChange} 
                total={`${total2}0`} 
                showSizeChanger={false} 
                showTotal= {records => `${currentPage} of ${records}`}
              />
          </div>
          <Users records={currentPayment} />
          <div className="c-container-wrapper-bottom">
            <Pagination 
              current={currentPage} 
              onChange={handleChange} 
              total={`${total2}0`} 
              showSizeChanger={false} 
              showTotal= {records => `${currentPage} of ${records}`}
            />
            </div>
          </div>
        )}
      </div>
      <BackTop />
    </>
  )
};

export default Homepage;
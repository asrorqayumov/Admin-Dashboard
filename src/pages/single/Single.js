import React from 'react';
import './single.scss';
import { Sidebar } from './../../components/sidebar/Sidebar';
import { Navbar } from './../../components/navbar/Navbar';

export const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
       <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImg" />
            details
          </div>
        </div>
        <div className="right"></div>
       </div>
       <div className="bottom"></div>
      </div>
    </div>
  )
}

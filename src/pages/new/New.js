import React from "react";
import "./new.scss";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Navbar } from "./../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

export const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?b=1&k=20&m=922962354&s=170667a&w=0&h=gpsD4Kn3xGxc_CMswNa_twx-Nxf9og_ipyV_2rjCWj4=" alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file"> Image: <DriveFolderUploadOutlined className="icon" /></label>
                <input type="file" id="file" style={{display:'none'}} />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name and Surename</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="john_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="email" placeholder="+1 234 567 89" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password"  />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Elton St, 216 NewYork" />
              </div><div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="USA"  />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <strong>
            <li className="flistlogo">E-Learn</li>
          </strong>
          <strong><li className="fListItem">elearn@gmail.com</li></strong>
          <strong><li className="fListItem">0778905678</li></strong>
        </ul>
        <ul className="fList">
          <li className="fListItem">Expore courses</li>
          <li className="fListItem">Software</li>
          <li className="fListItem">Marketing</li>
          <li className="fListItem">Information technology</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Expore courses</li>
          <li className="fListItem">Software</li>
          <li className="fListItem">Marketing</li>
          <li className="fListItem">Information technology</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Quize</li>
          <li className="fListItem">Assignments</li>
          <li className="fListItem">Review</li>
          <li className="fListItem">Feedback</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Profile</li>
          <li className="fListItem">About us</li>
          <li className="fListItem">Terms and conditions</li>
          <li className="fListItem">Security</li>
          <li className="fListItem">Privacy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

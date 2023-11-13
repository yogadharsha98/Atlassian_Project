import React from "react";
import Header from "../components/Header";
import home from "../images/home.jpg";
import react from "../images/react.jpg";
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import './Style.css';

const Completed = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="welcome-container">
          <div className="top-container">
            <div className="sub-container">
              <h2 style={{ fontSize: 50 }}>Let's learn something new</h2>
              <br />
              <Button appearance="primary">Get started</Button>
            </div>
            <img src={home} alt="learn" height={280} width={500} />
          </div>
        </div>

        <div className="tabs">
          <strong>
            <Link to="/">Home</Link>
          </strong>
          <strong>
            <Link to="/progress">Progress</Link>
          </strong>
          <strong>
            <Link to="/completed">Completed</Link>
          </strong>
        </div>

        <div className="progress-container">
          <h3>Software</h3>
          <br></br>
          <div className="progress-course-row">
            <div className="single-completed-course">
              <img src={react} alt="react" height={180} width={350} />
              <div className="completed-course">
                <h3>React For Beginners</h3>
                <p>Completed</p>
              </div>
              <div className="view-btn">
                <Button appearance="primary">View</Button>
              </div>
            </div>

            <div className="single-completed-course">
              <img src={react} alt="react" height={180} width={350} />
              <div className="completed-course">
                <h3>React For Beginners</h3>
                <p>Completed</p>
              </div>
              <div className="view-btn">
                <Button appearance="primary">View</Button>
              </div>
              
            </div>
            
          </div>
        </div>
        <Button appearance="primary">Show more</Button>
        
        
      </div>
      <Footer />
    </>
  );
};

export default Completed;

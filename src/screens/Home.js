import React from "react";
import Header from "../components/Header";
import home from "../images/home.jpg";
import react from "../images/react.jpg";
import Button from "@atlaskit/button";
import { Link } from "react-router-dom";
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right'
import Footer from "../components/Footer";
import './Style.css';

const Home = () => {
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

        <div className="software">
          <h3>Software</h3>
          <div className="course-row">
            <Link to="/enroll">
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            </Link>
            
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            <div className="arrow-icon">
              <ArrowRightIcon></ArrowRightIcon>
            </div>
            
          </div>
        </div>

        <div className="marketing">
          <h3>Marketing</h3>
          <div className="course-row">
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            <div className="single-course">
              <img src={react} alt="react" height={180} width={300} />
              <h4>React For Beginners</h4>
            </div>
            <div className="arrow-icon">
              <ArrowRightIcon></ArrowRightIcon>
            </div>
          </div>
        </div>
        <Button appearance="primary">Show more</Button>
        
      </div>
      <Footer />
    </>
  );
};

export default Home;

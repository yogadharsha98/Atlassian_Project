import React from "react";
import Header from "../components/Header";
import react from "../images/react.jpg";
import Button from "@atlaskit/button";
import Footer from "../components/Footer";
import './Style.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="enroll-screen">
      <div className="enroll-screen">
        <div className="enroll-container">
          <h3 style={{ fontSize: 20 }}>React For Beginners</h3>
          <img src={react} alt="learn" height={280} width={500} />
          <br />
          <Button appearance="primary">Enroll</Button>
        </div>
        <div className="enroll-banner">
          <h2>React For Beginners</h2>
          <h3>Course Level: Beginner</h3>
          <h3>Duration: 3 hours</h3>
          <h3>Course outline</h3>
          <ol>
            <li>Introduction</li>
            <li>Managing state and events</li>
            <li>Components life cycle and events</li>
            <li>Working with lists and forms</li>
            <li>Routing and Navigation</li>
            <li>State management with context</li>
            <li>Building a mini project</li>
            <li>Quiz</li>
          </ol>

        </div>
        {/* <Button appearance="primary">Show more</Button> */}
        
      </div>
      <h2>Skills</h2>
        <div className="skills"> 
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        <Button appearance="primary">React</Button>
        </div>
      </div>
     
       
       
     
      <Footer />
    </>
  );
};

export default Home;

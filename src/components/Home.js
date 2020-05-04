import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-section">
      <Navbar />
      <div className="hero-section-bg">
        <div className="wrapper hero-section">
          <h1>
            The only marketing agency on
            <span className="hero-section-span"> a mission from God</span>,
            fully dedicated to increase your web traffic.
          </h1>
          <p>
            We’re two brothers from Chicago that are trying to pay back our
            debt. We can help you with{" "}
            <strong> SEO, SEM, content marketing</strong> and whatever else.
          </p>
          <button className="hero-section-button">contact us</button>
        </div>
      </div>
      <div className="card-section wrapper">
        <div className="about-us-card">
          <h2 className="home-header">About us</h2>
          <p>
            We grew up in downtown Chicago, and we used to play in a band. Jake
            loves fried chicken, and Elwood loves dry white toast.
          </p>
        </div>
        <div className="our-skills-card">
          <h2 className="home-header">Our skills</h2>
          <p>
            Elwood is an expert in SEO, SEM, and driving from the police. Jake
            is our social media specialist, and he has an amazing voice.
          </p>
        </div>
        <div className="get-in-card">
          <h2 className="home-header">Get in touch</h2>
          <p>
            Send us an email with some info about what help you need and we’ll
            drive over to your place in our Bluesmobile the following day to
            discuss the deal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

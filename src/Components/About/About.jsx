import React from 'react';
import './about.css'; 

function About() {
  return (
    <div className="about">
    <div className="about-container">
      <section className="intro">
        <h1>About Us</h1>
    
        <h2>Project Overview</h2>
<p>
  Welcome to our project on the Urban Infrastructure of Mumbai's Local Railway System. This college initiative, undertaken as part of the Viksit Bharat program, aims to delve into the challenges faced by Mumbai's local railway network and explore viable solutions. Our objective is to offer a comprehensive analysis that can contribute to improving the infrastructure and efficiency of the railway system, in line with the vision of a developed and prosperous India.
</p>

      </section>
     
      
      <section className="team">
        <h2>Meet the Team</h2>
        <p>
  Our project team comprises dedicated students of SYBSc Computer Science from Ramnarain Ruia Autonomous College, with a keen interest in urban planning and data analysis. Each member brings a unique set of skills to the table, working collaboratively to produce a thorough and insightful analysis.
</p>

      </section>
      
      <section className="approach">
        <h2>Our Approach</h2>
        <p>
          To gather meaningful insights, we have conducted extensive research using Google Forms and in-depth interviews with stakeholders. Our data collection efforts have provided a wealth of information that we have meticulously analyzed to identify key problems and potential solutions.
        </p>
      </section>

      <section className="mission">
        <h2>Mission Statement</h2>
        <p>
          Our mission is to shed light on the critical issues within Mumbai's local railway system and propose actionable solutions. We strive to enhance urban infrastructure by presenting data-driven recommendations that can lead to a more efficient and reliable transportation network.
        </p>
      </section>

      <section className="offer">
        <h2>What We Offer</h2>
        <ul>
          <li>Problem Analysis: In-depth examination of current issues within the local railway system based on our research findings.</li>
          <li>Data Insights: Visualizations and summaries of the data collected through surveys and interviews.</li>
          <li>Proposed Solutions: Practical recommendations aimed at addressing the identified challenges and improving the railway infrastructure.</li>
        </ul>
      </section>

     


      <section className="get-involved">
        <h2>Get Involved</h2>
        <p>
          We value your feedback and suggestions. Feel free to reach out to us with any comments or questions at <a href="mailto:mumbailocalrail@gmail.com">mumbailocalrail@gmail.com</a>. 
        </p>
      </section>

      <section className="explore">
        <h2>Explore More</h2>
        <p>
          Dive into our website to learn more about the issues and solutions related to Mumbai's local railway system. Your engagement can help drive meaningful change in urban transportation.
        </p>
      </section>
    </div>
    </div>
  );
}

export default About;

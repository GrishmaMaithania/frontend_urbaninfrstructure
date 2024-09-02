import React, { useState } from 'react';
import mumbaiLocalImage from '../../../Media/local2.png';
import n1 from '../../../Media/news1.jpeg';
import n2 from '../../../Media/news2.jpeg';
import n3 from '../../../Media/news3.jpeg';
import n4 from '../../../Media/news4.jpeg';
import n5 from '../../../Media/news5.jpeg';
import './home.css';
import axios from 'axios';

function Home() {
    const [email, setEmail] = useState('');
    const [observation, setObservation] = useState('');

    const submitApplication = async () => {
        const bodyJson = {
            email: email,
            observation: observation,
        };

        try {
            await axios.post('https://backend-urbaninfrastructure.onrender.com/api/input', bodyJson);
            alert('Application submitted successfully');
            setEmail('');
            setObservation('');
        } catch (error) {
            alert('An error occurred while submitting the application');
            console.log(error);
        }
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlide = (direction) => {
        const container = document.getElementById("container");
        const step = 400;

        if (direction === 'left') {
            setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
        } else {
            setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 3));
        }
        sideScroll(container, direction, 15, step, 10);
    };

    const slideLeft = () => handleSlide('left');
    const slideRight = () => handleSlide('right');

    return (
        <div className="home-container">
          
            <section className="intro-section py-10 px-6 text-center ">
                <h1 className="text-3xl font-bold mb-4">Transforming Mumbai's Local Train System</h1>
                <p className="text-lg">
                    Mumbai's local railway system is more than just a mode of transport—it's the backbone of the city, carrying millions of commuters daily across its vast urban expanse. However, this essential infrastructure is not without its challenges. From overcrowding to aging facilities, the issues faced by this network directly impact the daily lives of its users. Our project delves into these critical problems, offering insights and actionable solutions to enhance the efficiency and safety of Mumbai's local railway system.
                </p>
                <p className="text-lg mt-4">
                    This initiative is part of the Viksit Bharat mission, and we, as dedicated students of Ramnarain Ruia College, Matunga, have taken it upon ourselves to contribute towards a more developed and sustainable urban infrastructure. Through thorough research, data analysis, and survey, we aim to drive meaningful change for the betterment of our city's transport system.
                </p>
            </section>

            <section className="news-section py-10 px-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Balancing Act: Celebrating and Addressing the Local Railway System</h2>
                <div className="imgs flex justify-center overflow-hidden" id='container'>
                    <div className="slide flex mt-10" id='content'>
                        <img className='slide_Img ml-4' src={n1} alt="News 1" />
                        <img className='slide_Img ml-4' src={n2} alt="News 2" />
                        <img className='slide_Img ml-4' src={n3} alt="News 3" />
                        <img className='slide_Img ml-4' src={n4} alt="News 4" />
                        <img className='slide_Img ml-4' src={n5} alt="News 5" />
                    </div>
                </div>
                <div className="flex BUttons mt-4 justify-center">
                    <button className="back" onClick={slideLeft}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className="next" onClick={slideRight}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
                <p className="text-lg mb-6">
                    Our local trains are the lifeline of the city, offering convenience and connectivity. Yet, like any system, there are areas for improvement. Explore how our railway network shines and where it needs attention to ensure a smoother ride for everyone.
                </p>
            </section>

    
           
            <div className="flex items-center justify-center">
    <section className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg w-full max-w-[835px] text-center">
        <h2 className="text-2xl font-semibold mb-4">Share Your Observations</h2>
        <p className="text-lg mb-4">
  We value your insights. Please share the improvements you've observed in the Mumbai local railway system compared to before.
</p>

        <div className="input-container">
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 mb-4 border rounded w-full"
            />
            <textarea
                placeholder="Your Observation"
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                className="p-2 mb-4 border rounded w-full h-32"
            ></textarea>
            <button
                onClick={submitApplication}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Submit
            </button>
        </div>
    </section>
</div>


        </div>
    );
}

export default Home;

function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        if (direction === 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
}

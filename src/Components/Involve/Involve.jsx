import React from 'react';
import './involve.css';
function Involve() {
  return (
    <div className="involve"> 
      <div className="max-w-4xl mx-auto p-8 bg-gray-100 bg-opacity-70 text-gray-800 rounded-lg shadow-lg my-10">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-6">
          Make Your Voice Heard!
        </h2>
        <p className="text-lg leading-relaxed text-justify mb-4">
          Tired of the daily challenges on your commute? Now’s your chance to be part of the change! We’re gathering insights directly from commuters like you to help drive real improvements in Mumbai’s local railway system. Your feedback won’t just be heard—it will be the cornerstone of the solutions we propose.
        </p>
        <p className="text-lg leading-relaxed text-justify font-bold text-red-600 mb-8">
          Don’t miss out on this opportunity to make a difference—fill out the form below and let’s start making changes today.
        </p>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSd3QdLw6Ke_KquSVdZiwOBaflpTOEG9pv9jQxymAoQnONnsfw/viewform?embedded=true" 
          width="100%" 
          height="6917" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0" 
          className="border-2 border-indigo-900 rounded-lg">
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Involve;

import React, { useState } from 'react';
import './data.css';

function Data() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const toggleQuestion = (id) => {
    setSelectedQuestions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((qId) => qId !== id)
        : [...prevSelected, id]
    );
  };
  const questions = [
    {
      id: 1,
      text: "Most convenient time for the citizens to travel on the local train service",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=2039353387&amp;format=interactive"
    },
    {
      id: 2,
      text: "How often citizens miss their trains due to overcrowding",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1674995177&amp;format=interactive"
    },
    {
      id: 3,
      text: "Do citizens feel uncomfortable or unsafe due to overcrowding?",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=374253477&amp;format=interactive"
    },
    {
      id: 4,
      text: "How clear and helpful are the instructions and announcements at the stations",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1649831810&amp;format=interactive"
    },
    {
      id: 5,
      text: "Security measures at the stations and on the trains",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1887164104&amp;format=interactive"
    },
    {
      id: 6,
      text: "Citizens witnessed or been involved in an accident related to local trains",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=2111196562&amp;format=interactive"
    },
    {
      id: 7,
      text: "Responsiveness of the guards in the ladies' coach to any security or safety concerns raised by passengers",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=109206266&amp;format=interactive"
    },
    {
      id: 8,
      text: "Opinion on accessibility of local trains for people with disabilities",
      chartSrc:"https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=926188170&amp;format=interactive"
    },
    {
      id: 9,
      text: "How often non-disabled passengers occupy the seats in the special coach for blind and disabled people?",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=926188170&amp;format=interactive"
    },
    {
      id: 10,
      text: "Enough availability of special coaches for blind and disabled passengers on the trains",
      chartSrc:"https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1964430904&amp;format=interactive"
    },
    {
      id: 11,
      text: "Rating for the cleanliness of the water facilities on stations",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1189136458&amp;format=interactive"
    },
    {
      id: 12,
      text: "Rating the cleanliness of the washroom facilities on stations",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=930825628&amp;format=interactive"
    },
    {
      id: 13,
      text: "Are the washrooms at stations adequately stocked with essential supplies",
      chartSrc:"https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=373241423&amp;format=interactive"
    },
    {
      id: 14,
      text: "Ratings for the accuracy of railway's mobile app and web services",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1432395484&amp;format=interactive"
    },
    {
      id: 15,
      text: "Rating for the availability of amenities (shops, ATMs, ticket counters)",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=43690841&amp;format=interactive"
    },
    {
      id: 16,
      text: "Ratings for the overall cleanliness of the stations",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1441674716&amp;format=interactive"
    },
    {
      id: 17,
      text: "Ratings for the punctuality of trains",
      chartSrc:"https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1895549437&amp;format=interactive"
    },
    {
      id: 18,
      text: "Ratings for the behaviour of the railway staff",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=888066308&amp;format=interactive"
    },
    {
      id: 19,
      text: "Overall satisfaction with the local railway service?",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1786792591&amp;format=interactive"
    },
    {
      id: 20,
      text: "Improvement needed in the future",
      chartSrc: "https://docs.google.com/spreadsheets/d/1glVLTg09PUD5o2T-mRg6NVX1GJP2OfkrmMlniwIzlx8/pubchart?oid=1318334995&amp;format=interactive"
    },
  ];


  return (
    <div className="data">
      <div className="p-8 max-w-5xl mx-auto  ">
        <h1 className="text-center mb-5 text-4xl p-3 font-semibold text-blue-800 bg-white bg-opacity-70 rounded-lg shadow-lg">
          Comprehensive Insights from Local Railway Commuters Survey and Interviews
        </h1>
        <p className="text-center mb-4 text-xl p-3 text-black bg-white bg-opacity-70 rounded-lg shadow-lg">
        


The data presented on this page is the culmination of a comprehensive research effort involving both extensive surveys and in-depth interviews with daily commuters of the local railway system. The research was meticulously conducted to gather detailed insights into the experiences, challenges, and expectations of the citizens who depend on these services for their daily commute.

The survey component involved reaching out to a diverse cross-section of commuters, ensuring that a wide range of perspectives were captured. This included regular passengers, occasional travelers, and those with specific needs, such as individuals with disabilities. The questions were carefully designed to cover all aspects of the commuting experience, from the convenience and safety of the train services to the accessibility and cleanliness of the stations.
       <br></br>  <br></br>
       
          <em className="text-sm text-red-800">[Click on any point below to view the corresponding data chart.]</em>
        </p>
        <div>

          {questions.map((question) => (
            <div
            key={question.id}
            className="mb-5 p-6 bg-white bg-opacity-70 rounded-lg shadow-lg hover:bg-blue-200 hover:bg-opacity-90 hover:shadow-xl transition ease-in-out duration-300"


              onClick={() => toggleQuestion(question.id)}
            >
           <h3 className="cursor-pointer text-lg font-medium flex items-center">
  {question.text}
  <i className="bi bi-chevron-down ml-2"></i>
</h3>

              {selectedQuestions.includes(question.id) && (
                <div className="mt-4">
                  <iframe
                    className="w-full "
                    height="400"
                    seamless
                    frameBorder="0"
                    scrolling="no"
                    src={question.chartSrc}
                  ></iframe>
                </div>
              )}
            </div>
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;  


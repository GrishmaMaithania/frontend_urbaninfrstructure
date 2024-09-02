import React from 'react';
import './pas.css';
function Pas() {
  const problems = [
   
    {
      title: "Overcrowding in Trains",
      suggestions: [
        {
          suggestion: "Increase Train Frequency",
          description: "During peak hours, increase the number of air-conditioned trains available, add more trains on heavily used routes, particularly long-distance ones. For example, on the Central Line, increase the number of trains running from Kasara to CST (Chhatrapati Shivaji Maharaj Terminus) to reduce the interval between arrivals, making it easier for passengers to board and reducing overcrowding.",
          justification: "Improved Passenger Experience: More frequent trains and controlled access will reduce crowding on platforms and trains, making the commute smoother and more organized."
        },
        {
          suggestion: "Enhance Security Measures",
          description: "Implement stricter security checks at station entrances. Ensure that only ticketed passengers are allowed onto the platforms, thereby controlling access and reducing overcrowding and unauthorized entry.",
          justification: "Improved Passenger Experience: More frequent trains and controlled access will reduce crowding on platforms and trains, making the commute smoother and more organized."
        }
      ]
    },
    
    {
      title: "Unsafe Conditions Due to Overcrowding",
      suggestions: [
        {
          suggestion: "Install Automatic Doors",
          description: "Equip trains with automatic doors that remain closed while the train is in motion and only open when the train is fully stopped at a station. This prevents passengers from attempting to board or alight while the train is moving, reducing the risk of falls and accidents.",
          justification: "Enhanced Safety: Automatic doors that operate only when the train is stationary will reduce the likelihood of accidents, such as passengers falling from moving trains or getting injured while attempting to board or alight."
        }
      ]
    },
    {
      title: "Unclean Water Facility",
      suggestions: [
        {
          suggestion: "Install and Maintain Hygienic Water Dispensers",
          description: "Upgrade Stations and Trains: Equip major stations and trains with water dispensers that provide potable water, using advanced filtration systems (e.g., reverse osmosis, UV purification) to remove contaminants and pathogens. Implement Routine Sanitation Protocols: Establish a comprehensive maintenance schedule, including daily cleaning, periodic microbiological testing, and chemical analysis of the water to ensure it meets safety standards.",
          justification: "Prevent Health Risks: Providing filtered and regularly tested water helps prevent the risk of waterborne illnesses, such as gastroenteritis and other infections, ensuring that passengers have access to safe drinking water and supporting overall public health."
        }
      ]
    },
    {
      title: "Unclean Washrooms",
      suggestions: [
        {
          suggestion: "Implement Comprehensive Washroom Maintenance",
          description: "Upgrade Facilities: Ensure washrooms at stations are equipped with high-quality fixtures, including hands-free faucets and flushes, to improve hygiene. Install air ventilation systems to reduce unpleasant odors and maintain a clean environment. Establish Regular Cleaning Protocols: Implement a rigorous cleaning schedule with frequent disinfection of high-touch surfaces using hospital-grade disinfectants. Include regular inspections and maintenance to address any issues promptly.",
          justification: "Improved Hygiene and Safety: Regular cleaning and maintenance of washrooms ensure a sanitary environment, reducing the risk of infections and improving overall passenger satisfaction and comfort."
        }
      ]
    },
    {
      title: "Behavior of Railway Staff",
      suggestions: [
        {
          suggestion: "Establish Feedback Mechanisms",
          description: "Set up systems for passengers to provide feedback on staff behavior, and conduct regular performance reviews based on this feedback. Address any issues promptly and provide additional training as needed.",
          justification: "Enhanced Passenger Experience: Well-trained staff who exhibit courteous and professional behavior will improve passenger satisfaction, reduce conflicts, and create a more positive and respectful travel environment."
        }
      ]
    },
    {
      title: "Overall Uncleanliness of Stations",
      suggestions: [
        {
          suggestion: "Implement a Comprehensive Cleanliness Program",
          description: "Upgrade Cleaning Protocols: Establish a rigorous cleaning schedule that includes frequent sanitation of high-traffic areas, such as waiting rooms, platforms, and ticket counters. Ensure regular deep cleaning. Enhance Waste Management: Increase the number of waste bins and ensure they are emptied regularly. Install dustbins on trains as well, and maintain a routine for their cleaning and emptying. Implement recycling programs to manage waste more effectively and reduce litter.",
          justification: "Improved Public Health and Comfort: Effective waste management, including adding dustbins on trains, will help reduce litter and maintain a cleaner environment both at stations and on trains. This approach enhances overall passenger satisfaction and helps prevent health issues associated with unclean conditions."
        }
      ]
    }
  ];

  return (
    <div className="PAS">
    <div className="container mx-auto p-6">
      
      {/* Transparent div for Introduction */}
      <div className="mx-auto mb-8 p-8 max-w-3xl bg-white bg-opacity-60 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-center mb-6">Challenges in Mumbai Local Railway and Proposed Solutions</h1>
        <p className="text-lg leading-relaxed text-gray-800">
          The Mumbai local railway system is the lifeline of the city, transporting millions of passengers daily. Despite its importance, the system faces numerous challenges that affect the daily commute of passengers. Below, we present some of the significant issues identified through surveys and interviews, along with practical solutions and justifications for their implementation.
        </p>
      </div>

      {/* Problem sections */}
      {problems.map((problem, index) => (
        <div key={index} className="mb-16 mx-auto p-8 max-w-3xl border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-80">
          <h2 className="text-2xl font-bold mb-6">{problem.title}</h2>
          {problem.suggestions.map((suggestion, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Suggestion: {suggestion.suggestion}</h3>
              <p className="mb-3">{suggestion.description}</p>
              <p className="text-md text-gray-700"><strong>Justification:</strong> {suggestion.justification}</p>
            </div>
          ))}
        </div>
      ))}

      {/* Transparent div for Conclusion */}
      <div className="mx-auto mt-8 p-8 max-w-3xl bg-white bg-opacity-60 border border-gray-300 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed text-gray-800">
          Implementing these suggestions would require a concerted effort from the authorities, but the benefits for the millions of daily commuters would be immense. By addressing these issues, the Mumbai local railway system can become more efficient, safer, and more pleasant for everyone who relies on it.
        </p>
      </div>

    </div>
    </div>
  );
}

export default Pas;

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-white text-black shadow-lg">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">            
            <div>
              <h3 className="text-sm font-bold">Official Railway Links</h3>
              <div className="flex flex-col items-start mt-4 space-y-4">
                <a href="https://cr.indianrailways.gov.in/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Central Railway</a>
                <a href="https://wr.indianrailways.gov.in/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Western Railway</a>
                <a href="http://www.indianrailways.gov.in/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Ministry of Railways</a>
                <a href="https://www.irctc.co.in/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">IRCTC</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Survey and Analysis</h3>
              <div className="flex flex-col items-start mt-4 space-y-4">
                <Link to="/data" className="transition-colors duration-200 hover:underline hover:text-blue-600">Survey Results</Link>
                <Link to="/pas" className="transition-colors duration-200 hover:underline hover:text-blue-600">Suggestions</Link>

              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Other Useful Links</h3>
              <div className="flex flex-col items-start mt-4 space-y-4">
                <a href="https://www.trainman.in/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Train Timetables</a>
                <a href="https://enquiry.indianrail.gov.in/ntes/" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Live Train Status</a>
                <a href="https://indianrailways.gov.in/safety.html" className="transition-colors duration-200 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Railway Safety Guidelines</a>
              </div>
            </div>

          </div>
          
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
          
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="social-icons flex space-x-4">
              <a href="https://www.facebook.com/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

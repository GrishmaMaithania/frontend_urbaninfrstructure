import React from 'react';
import './navbar.css';
import mumbaiLocalImage from '../../../Media/local2.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col items-center mb-4">
          <span className="text-yellow-400 text-3xl font-bold mb-2">
            URBAN INFRASTRUCTURE-PROBLEMS AND SOLUTIONS
          </span>
        </div>

        <hr className="custom-hr mb-4" />


        <table className="navbar-table">
          <tbody>
            <tr>
             
              <td></td>

              <td className="navbar-links">
                <ul className="flex">
                  <li id="home" className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
                    <Link to={'/'}>Home</Link>
                  </li>
                  <li className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
                  <Link to={'/about'}>About</Link>
                  </li>
                  <li className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
                    <Link to={"/involve"}>Get Involved</Link>
                  </li>
                  <li className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
               <Link to={"/data"}>Data Insights</Link>
                  </li>
                  <li className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
                    <Link to={"/pas"}>Problems & Suggestions</Link>
                  </li>
                  <li className="text-white hover:text-yellow-300 transition duration-200 ease-in-out">
                    <Link to={"/photo"}>Photo Gallery</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </nav>
  );
}

export default Navbar;

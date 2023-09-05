import React from 'react'
import mainlogo from './logo.PNG'
import '../componentstyling/header.css'
import { useState } from 'react';
import { useRef } from 'react';
// import navdata from "./navbardata"
import collegeData from './navbardata';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [details1, setdetails1] = useState(false)
    const [details2, setdetails2] = useState(false)
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };
    const handleMouseEnter1 = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen1(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };
    const handleMouseLeave1 = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen1(false);
        }, 300);
    };

    const moredetails1 = () => {
        setdetails1(!details1)
    }
    const hmengg = () => {
        clearTimeout(timeoutRef.current);
        setdetails1(true)
    }
    const hmlengg = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setdetails1(false);
        }, 500);
    }
    const hmengg1 = () => {
        setdetails2(!details2)
    }

    return (
        <div>


            <div className='header'>

                <div className='logoonly'><img className='pngfile' src={mainlogo} /></div>

                <div className='dropdowns'>


                    <div className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        Colleges <i class="fa-solid fa-arrow-down"></i>
                        {isOpen ? (

                            <div className='dropd'>
                                <div className="dropdown-menu">
                                    <div className='deopmenubox1'>

                                        <div className="dropdown-item" onMouseEnter={hmengg} onMouseLeave={hmlengg}>Engineering</div>
                                        <div className="dropdown-item" onClick={hmengg1}>Management</div>
                                        <div className="dropdown-item">Hotel Management</div>
                                        <div className="dropdown-item">Medical</div>
                                        <div className="dropdown-item">Physiotherapy</div>
                                        <div className="dropdown-item">Paramedical</div>
                                        <div className="dropdown-item">Arts & Humanities</div>
                                        <div className="dropdown-item">Science</div>
                                        <div className="dropdown-item">Mass Comm & Journalism</div>
                                        <div className="dropdown-item">Nursing</div>
                                        <div className="dropdown-item">Agriculture</div>
                                        <div className="dropdown-item">Design</div>
                                        <div className="dropdown-item">Information Technology</div>
                                        <div className="dropdown-item">Pharmacy</div>
                                        <div className="dropdown-item">Dental</div>
                                        <div className="dropdown-item">Performing Arts</div>
                                        <div className="dropdown-item">Comm & Banking</div>
                                        <div className="dropdown-item">Education</div>
                                        <div className="dropdown-item">Law</div>
                                        <div className="dropdown-item">Fashion</div>
                                    </div>

                                    <div className='itembox2'>
                                        {details1 ? <div className='sidebox'>
                                            {/* <div className='enggdet'> */}
                                            <div class="row noMargin enggdet">
                                                <div class="one">
                                                    <h6>
                                                        Colleges By Degree
                                                    </h6>
                                                    <a href='#'>B.tech</a>
                                                    <li>M.tech</li>
                                                    <li>B.tech + M.tech</li>
                                                    <li>Diploma</li>
                                                    <li>  <a href='/'>View all</a>
                                                    </li>
                                                </div>
                                                <div class="two">
                                                    <h6>
                                                        Colleges By Citiees
                                                    </h6>
                                                    <li>Delhi</li>
                                                    <li>Jaipur</li>
                                                    <li>Banglore</li>
                                                    <li>Hyderabad</li>
                                                    <li>                            <a href='/'>View all</a>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="row noMargin">
                                                <div class="three">
                                                    <h6>
                                                        Colleges By States

                                                    </h6>
                                                    <li>Delhi-Ncr</li>
                                                    <li>Rajasthan</li>
                                                    <li>Karnatka</li>
                                                    <li>Maharashtra</li>
                                                    <li><a href='/'>View all</a></li>
                                                </div>
                                                <div class="four">
                                                    <h6>Popular Collages</h6>
                                                    <li>Parul University</li>
                                                    <li>LPU</li>
                                                    <li>BITS-Pilani</li>
                                                    <li>IIT-Madras</li>
                                                    <li><a href='/'>View all</a></li>
                                                </div>
                                                <li>Didnt find what you were looking for ? <a href='/'>  Click here</a> to get a call from Counselor!!</li>
                                                {/* </div> */}
                                            </div></div> : null}

                                        {details2 ? <div className='sidebox'>
                                            {/* <div className='enggdet'> */}
                                            <div class="row noMargin enggdet">
                                                <div class="one">
                                                    <h6>
                                                        Colleges By Degree
                                                    </h6>
                                                    <li>Course1</li>
                                                    <li>Course2</li>
                                                    <li>Course3</li>
                                                    <li>Course4</li>

                                                    <li>  <a href='/'>View all</a>
                                                    </li>
                                                </div>
                                                <div class="two">
                                                    <h6>
                                                        Colleges By Citiees
                                                    </h6>
                                                    <li>Delhi</li>
                                                    <li>Jaipur</li>
                                                    <li>Banglore</li>
                                                    <li>Hyderabad</li>
                                                    <li>                            <a href='/'>View all</a>
                                                    </li>
                                                </div>
                                            </div>
                                            <div class="row noMargin">
                                                <div class="three">
                                                    <h6>
                                                        Colleges By States

                                                    </h6>
                                                    <li>Delhi-Ncr</li>
                                                    <li>Rajasthan</li>
                                                    <li>Karnatka</li>
                                                    <li>Maharashtra</li>
                                                    <li><a href='/'>View all</a></li>
                                                </div>
                                                <div class="four">
                                                    <h6>Popular Collages</h6>
                                                    <li>Parul University</li>
                                                    <li>LPU</li>
                                                    <li>BITS-Pilani</li>
                                                    <li>IIT-Madras</li>
                                                    <li><a href='/'>View all</a></li>
                                                </div>
                                                <li>Didnt find what you were looking for ? <a href='/'>  Click here</a> to get a call from Counselor!!</li>
                                                {/* </div> */}
                                            </div></div> : null}

                                    </div>


                                </div>





                            </div>
                        ) : null}
                    </div>


                    <div className='coursesdropdown'>
                        Courses <i class="fa-solid fa-arrow-down"></i>
                    </div>

                    <div className='coursesdropdown'>
                        Exams <i class="fa-solid fa-arrow-down"></i>
                    </div>

                    <div className='coursesdropdown'>
                        Study Abroad
                    </div>

                    <div className='coursesdropdown'>
                        Get Counselling
                    </div>

                    <div className='coursesdropdown'>
                        Latest News
                    </div>









                </div>


            </div>

        </div>
    )
}

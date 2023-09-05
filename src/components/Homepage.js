import React from 'react'
import '../componentstyling/homepage.css'
export default function Homepage() {
  return (
    <div className='homepage'>
        <div className='oval'>
            <div className='crcl1'></div>
            <div className='textdata'>
                <h3>From College Admission<br></br>
                    to First Job Placement...
                </h3>
                    <p>We are with you...!!</p>
                <div className='buttonss'>

                    <button>Secure Your Growth</button>
                    <button>Get Enrolled Now</button>
                </div>
            </div>
            <img/>
        </div>

        <div className='bar'>
            <li><i class="fa-solid fa-bullhorn fa-2xl"></i></li>
            <li> JEE Answer key 2023 released</li>
            <li>DU to release new courses list</li>
            <li>LPU application form live</li>
            <li>Parul to conduct convocation</li>
            
        </div>

    <div className='lastbox'>
        <div className='texttt'>10,000 <br></br>Applications registered</div>
        <div className='texttt'>1000 <br></br> Admissions Registered</div>
        <div className='texttt'>100000 <br></br>Students Free Counselled</div>
    </div>
        
    </div>
  )
}

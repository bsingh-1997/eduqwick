import React from 'react'
import '../componentstyling/footer.css'

export default function Footer() {
  return (
    <div className='wholecomponent'>
        <div className='socialmedia'>
            <div className='text1'>
            You can follow us on your fav !!!<br></br>Social Media platform... 
            </div>

            <div className='icons'>

            <div className='iconcomps'><a href='https://www.instagram.com/' target='blank'><i class="fa-brands fa-instagram fa-2xl"></i></a></div>
            <div className='iconcomps'><a href='https://www.whatsapp.com/' target='blank'><i class="fa-brands fa-whatsapp fa-2xl"></i></a></div>
            <div className='iconcomps'><a href='https://www.facebook.com/' target='blank'><i class="fa-brands fa-facebook fa-2xl"></i></a></div>
           <div className='iconcomps'> <a href='https://www.youtube.com/' target='blank'><i class="fa-brands fa-youtube fa-2xl"></i></a></div>
            <div className='iconcomps'><a href='https://www.twitter.com/' target='blank'><i class="fa-brands fa-twitter fa-2xl"></i> </a></div>

            </div>


            <div className='email'>
            <i class="fa-solid fa-envelope fa-2xl"></i>
            hello@eduqwick.com
            </div>

            <div className='phoneno'>
            <i class="fa-solid fa-phone fa-xl"></i>
            1800 xxxxxx
            </div>

        </div>
        <hr></hr>
    </div>
  )
}

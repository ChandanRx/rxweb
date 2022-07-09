import React from 'react'
import { FaInstagram ,FaTwitterSquare ,FaLinkedin , FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebookSquare , FaPhoneAlt , FaMailBulk} from 'react-icons/fa';


const Contact = () => {
  return (
      <>
      <div className='main-d'>
        <div className='socialM'>
          
            <p>
               <a href="https://www.facebook.com/chandan.rxn" target='_chandan'> <FaFacebookSquare className='fb'/> </a>
            </p>
            <p>
            <a href="https://www.instagram.com/chandan.pargi/" target='_chandan'> <FaInstagram className='insta'/> </a>
            </p>
            <p>
            <a href="https://twitter.com/rxn_13" target='_chandan'> <FaTwitterSquare className='twitter'/> </a>
            </p>
            <p>
            <a href="https://www.linkedin.com/in/chandan-pargi-459272187/" target='_chandan'> <FaLinkedin className='linkdin'/> </a>
            </p>
            <p>
            <a href="https://wa.me/9904284492?text=" target='_chandan'> <FaWhatsappSquare className='whatsapp'/> </a>
            </p>
        </div>
      </div>
      <div className='cont'>
      <h3>
          <FaMailBulk/> : chandan.rxn@gmail.com
        </h3>
        <h3>
          <FaPhoneAlt/> : +919773283615
        </h3>
        <br/>
        <br/>
        <h5>
         🙏 Jay Shree Krishna 🙏
        </h5>
      </div>
      </>
  )
}

export default Contact;
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram, faLinkedinIn, faLinkedin,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './phoneicon'
import PhoneIconsm from './phoneiconsm';
import MailIconsm from './mailiconsm';
import Youtubelogo from './youtubelogo';
import PhoneIcon from './phoneicon';
import MailIcon from './mailicon';

const Footersm=()=>{

    return(
        <footer className='bg-[#000000]  md:hidden text-[#FFFFFF]' id='footer'>
        <div className="sm:flex md:hidden flex flex-col gap-10 justify-around">
          <div className="flex mt-10 justify-around gap-10">
            <div >
              <h1 className='text-[5vh] sm:text-[7vw]  font-[700]  after:content-["We_Breed_Business"] after:text-[2vw] after:font-normal after:sm:text-[2vh] after:text-[#FFFFFF] flex flex-col gap-0 after:static leading-[60%] after:pl-[0.4vw]'>
                E-CELL
              </h1>
            </div>
            <div className="flex flex-col gap-3">
                <div className='flex  items-center justify-start text-[#FFFFFF] gap-2 pb-2px'>
                    <p className='block sm:hidden'><PhoneIconsm  /></p>
                    <p className='hidden sm:block' ><PhoneIcon /></p>
                  <a href="tel:+91 87777 93331" className="text-white text-[3vw]">+91 87777 93331</a>
                </div>
                <div className='flex items-centre gap-2 justify-start'>
                    <p className='pt-[0.8vh] block sm:hidden'><MailIconsm /></p>
                    <p className='pt-[1.5vh] hidden sm:block'><MailIcon /></p>
                  <a href="mailto:helloecellvit@gmail.com" className='text-[#FFFFFF] text-[3vw]'>helloecellvit@gmail.com</a>
                </div>
          </div>
        </div>
          <div className="flex justify-around items-center flex-1 p-5">
            <div className='flex flex-col gap-[2vh]'>
                <div>
                <a href="https://www.instagram.com/ecell_vit/" className="p-1   flex items-center" style={{Image:'url("@/assests/assests/socialmediaborder.png")'}} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className=" w-10 h-10"  />
                </a> 
                </div>
                <div>
                <a href="https://www.linkedin.com/company/ecellvitvellore" className="p-1   flex items-center" style={{Image:'url("@/assests/assests/socialmediaborder.png")'}} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className=" w-10 h-10"  />
                </a>
                </div>
                <div>
                <a href="https://www.youtube.com/@e-cellvit7216" className="p-1    flex items-center" style={{Image:'url("@/assests/assests/socialmediaborder.png")'}} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className=" w-10 h-10"  />
                </a>
                </div>
                <div>
                <a href="https://twitter.com/ecell_vit" className="p-1   flex items-center" style={{Image:'url("@/assests/assests/socialmediaborder.png")'}} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="w-10 h-10"  />
                </a>
                </div>
            </div>
            <div>
                <p className='text-sm justify-center items-center text-[rgba(255,255,255,0.61)] flex w-[70vw] text-justify '>
                The Entrepreneurship Cell, VIT Vellore, is a student-led organization established to promote the spirit of entrepreneurship among young innovators. E-Cell aims to provide students with a platform along with the necessary tools to convert their ideas into successful business ventures. The club’s mission is to create an engaging entrepreneurial culture within the institution while establishing a network of various investors, mentors, and evaluators to enhance the startup ecosystem for the future. 
                </p>
            </div>
          </div>
        </div>
        </footer>
    );
}

export default Footersm;
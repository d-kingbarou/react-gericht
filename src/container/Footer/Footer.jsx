import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Number, Street, Postcode, Country</p>
        <p className='p__opensans'>+60 12-345 6789</p>
        <p className='p__opensans'>+60 12-345 6789</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='footer logo' />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Mon - Fri:</p>
        <p className='p__opensans'>10:00am - 10:00pm</p>
        <p className='p__opensans'>Sat - Sun:</p>
        <p className='p__opensans'>11:00am - 2:00am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

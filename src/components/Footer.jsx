import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/redstore.jpg';
import playStore from '../assets/play-store.png';
import appStore from '../assets/app-store.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-col-1">
            <h3 className="text-white text-lg font-semibold mb-4">DOWNLOAD OUR APP</h3>
            <p className="mb-4">Download App for Android and iOS mobile phone.</p>
            <div className="flex space-x-4">
              <img src={playStore} alt="Play Store" className="w-32 h-auto" />
              <img src={appStore} alt="App Store" className="w-32 h-auto" />
            </div>
          </div>
          <div className="footer-col-2 text-center">
            <img src={logo} alt="Redstore" className="w-48 h-auto mx-auto mb-4" />
            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
          </div>
          <div className="footer-col-3">
            <h3 className="text-white text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2"><Link to="/coupons" className="hover:text-white">Coupons</Link></li>
              <li className="mb-2"><Link to="/blog" className="hover:text-white">Blog Post</Link></li>
              <li className="mb-2"><Link to="/return-policy" className="hover:text-white">Return Policy</Link></li>
              <li className="mb-2"><Link to="/join-affiliate" className="hover:text-white">Join Affiliate</Link></li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3 className="text-white text-lg font-semibold mb-4">Follow us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Youtube</a></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm">Copyright 2025 - Muskan</p>
      </div>
    </footer>
  );
};

export default Footer;

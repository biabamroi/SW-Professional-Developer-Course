import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav>
        <h1 className="contact">
          Contact
        </h1>
        <ul className="footer-list">
          <li><a href="mailto:email@gmail.com">메일</a></li>
          <li><a href="tel:010-1234-1234">전화</a></li>
          <li><a href="https://www.youtube.com">유튜브</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
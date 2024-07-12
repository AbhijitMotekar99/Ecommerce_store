import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>Recreated By Abhijit M. Thanks to MeAbhiSingh</p>

        <p>Copyrights 2024</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/abhijit.motekar">Instagram</a>
        <a href="https://www.linkedin.com/in/abhijit-motekar-46017022a">LinkdIn</a>
      </div>
    </footer>
  );
};

export default Footer;

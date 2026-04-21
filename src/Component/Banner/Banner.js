import React from 'react';
import './Banner.css'
import bannerImage from '../../assets/images/figma1.png'
function Banner() {
  return (
     <div className="banner">
            <div className="banner-left">
                <h4 className="banner-left1">Branding | Image making </h4>
                <h2 className="banner-left2">Visual Designer</h2>
                <div className="banner-left3">This is a template Figma file, turned into code using Anima.<br />
                Learn more at AnimaApp.com </div> 
                     <button type='contact' className="button">Contact</button>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="banner-image" width="300" height="350" />
            </div>
        </div>
  );
}

export default Banner;

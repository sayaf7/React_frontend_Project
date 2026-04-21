import React from 'react';
import './Threeicon.css'
import iconImage from '../../assets/images/Rectangle.png'
import arrowImage from '../../assets/images/Arrow 3.png'
import iconImage1 from '../../assets/images/Skills Card Icon.png'
import arrowImage1 from '../../assets/images/Arrow 5.png'
import iconImage2 from '../../assets/images/Rectangle 25.png'
import arrowImage2 from '../../assets/images/Arrow 7.png'
function Threeicon() {
  return (
   
        <div class="fourth-nav">
            <div className="box1">
                <img src={iconImage} alt="Rectangle is not there" className="angle" />
                <img src={arrowImage} alt="Arrow is not there" className="arrow3" />
                <h2 className="angle-heading">Product Design</h2>
                <h4 class="angle-desc">This is a template Figma file, turned<br />into code using Anima. Learn more at<br />AnimaApp.com</h4>
            </div>
             <div className="box1">
                <img src={iconImage1} alt="Skills is not there" className="angle" />
                <img src={arrowImage1} alt="Arrow is not there" className="arrow5" />
                <h2 className="angle-heading">Visual Design</h2>
                <h4 className="angle-desc">This is a template Figma file, turned<br />into code using Anima. Learn more at<br />AnimaApp.com</h4>
            </div>
             <div className="box1">
                <img src={iconImage2} alt="Rectangle is not there" className="angle" />
                <img src={arrowImage2} alt="Arrow is not there" className="arrow7" />
                <h2 className="angle-heading">Art Direction</h2>
                <h4 className="angle-desc">This is a template Figma file, turned<br />into code using Anima. Learn more at<br />AnimaApp.com</h4>
            </div>
        </div>
  );
}

export default Threeicon;

import React from 'react';
import './Testimonial.css'
import SImage from '../../assets/images/Star.png'
import Profile from '../../assets/images/review.png'


function Testimonial() {
    let Stars=[{
        // P1:"This is a template Figma file,",
        // P2:"turned into code using Anima.",
        // P3:"Learn more at AnimaApp.com",
        ProfileImage:Profile,
        StarImage:SImage,
        Title1:"Gemma Nolen",
        Title2:"Google"
    }]
  return (
    <div className="sixth-nav">
            <h2 className="sixth-text">Testimonial</h2>
            <div className="review">
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />

                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>

                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />
                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>
                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />
                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>
                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />
                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>
                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />
                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>
                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                <div className='profile'>
                    <h4 className="p1">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>

                {
                    Stars.map((i)=>(
                        <div className='profile-text'>
                            {/* <div className='p1'>{i.P1}{i.P2}{i.P3}</div> */}
                            <img src={i.ProfileImage} alt="profile missing" className="profile-photo" />
                            <div className='Star'>
                            <img src={i.StarImage} alt='Star is not working 1' className='star' />
                            <img src={i.StarImage} alt='Star is not working 2' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 3' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 4' className='star'  />
                            <img src={i.StarImage} alt='Star is not working 5' className='star'  />
                            </div>
                            <div className='profile-name'>{i.Title1}</div>
                            <div className='google'>{i.Title2}</div>
                        </div>
                    ))
                }
                </div>
                







                {/* <div className="profile">
                    <h4 className="profile-text">This is a template Figma file,<br /> turned into code using Anima.<br /> Learn more at AnimaApp.com</h4>
                    <img src="photos/review.png" alt="profile missing" className="profile-photo" />
                    <div className="stars">




                        <img src="photos/Star.png" alt="Star missing" />
                        <img src="photos/Star.png" alt="Star missing" />
                        <img src="photos/Star.png" alt="Star missing" />
                        <img src="photos/Star.png" alt="Star missing" />
                        <img src="photos/Star.png" alt="Star missing" />
                    </div>
                    <h4 className="profile-name">Gemma Nolen</h4>
                    <h5 className="google">Google</h5>
                </div> */}
            </div>
    </div>
  );
}

export default Testimonial;

import React from 'react';
import './Login.css'
import Applogo1 from '../../assets/images/discod.png'
import Applogo2 from '../../assets/images/facebook.png'
import Applogo3 from  '../../assets/images/dribbble.png'
import Applogo4 from '../../assets/images/nstagram.png'
import Applogo5 from '../../assets/images/behance.png'

function Login() {
    let Logo=[{
        AppLogo:Applogo1
    },
    {
        AppLogo:Applogo2
    },
    {
        AppLogo:Applogo3
    },
    {
        AppLogo:Applogo4
    },
    {
        AppLogo:Applogo5
    }]
  return (
    <div className="seventh-nav">
            <h2 className="seventh-text">Lets work together</h2>
            <div className="login">
                <h5 className="second-desc">This is a template Figma file, turned into code using Anima. Learn<br /> more at AnimaApp.com This is a template Figma file, turned into<br /> code using Anima. Learn more at AnimaApp.com</h5>
                <form className="from">
                    <div className="sign-in">
                        <div className="name">
                        <input type="text" placeholder="Name" />
                        </div>
                        <div className="email">
                        <input type="text" placeholder="Email" />
                        </div>
                        <button className="button">Submit</button>
                    </div>
                </form>
                <div className="applogos">
                    {
                        Logo.map((i)=>(
                            <div className='applogo'>
                                <img src={i.AppLogo} alt='Apps logo is not there' />
                            </div>
                        ))
                    }



                    {/* <img src="photos/discod.png" alt="discod not available" />
                    <img src="photos/facebook.png" alt="facebook not available" />
                    <img src="photos/dribbble.png" alt="dribbble not available" />
                    <img src="photos/nstagram.png" alt="instagram not available" />
                    <img src="photos/behance.png" alt="behance not available" /> */}
                </div>
                
            </div>
        </div>
  );
}

export default Login;

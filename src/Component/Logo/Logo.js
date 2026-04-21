import React from 'react';
import './Logo.css'
import logobar1 from '../../assets/images/google.png'
import logobar2 from '../../assets/images/nike.png'
import logobar3 from "../../assets/images/sumsang.png"
import logobar4 from '../../assets/images/apple.png'
import logobar5 from '../../assets/images/adidas.png'

function Logo() {
    let logobar=[{
        logobarImage:logobar1
    },
    {
        logobarImage:logobar2
    },
    {
        logobarImage:logobar3
    },
    {
        logobarImage:logobar4
    },
    {
        logobarImage:logobar5
    }]
  return (
    <div className="logo">
            <div className="logos">
                {
                    logobar.map((i)=>(
                        <div className='logobar1'>
                            <img src={i.logobarImage} alt='logobarimage'/></div>
                    ))
                }


                
                {/* <img src="photos/google.png" alt="google is not there" />
                <img src="photos/nike.png" alt="nike is not there" />
                <img src="photos/sumsang.png" alt="sumsang is not there" />
                <img src="photos/apple.png" alt="apple is not there" />
                <img src="photos/adidas.png" alt="adidas is not there" /> */}
            </div>
        </div>
  );
}

export default Logo;

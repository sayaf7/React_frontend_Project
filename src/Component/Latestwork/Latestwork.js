import React from 'react';
import './Latestwork.css'
import Works1 from '../../assets/images/Project title.png'
import Works2 from '../../assets/images/Project title2.png'
import Works3 from '../../assets/images/Project title3.png'
import Works4 from '../../assets/images/Project title4.png'
import Works5 from '../../assets/images/Project title5.png'
import Works6 from '../../assets/images/Project title6.png'

function Latestwork() {
    let Works=[{
        WorkImage:Works1,
        ItemTitle1:"Project title",
        ItemTitle2:" UI, Art Direction"
    },
    {
        WorkImage:Works2,
         ItemTitle1:"Project title",
         ItemTitle2:" UI, Art Direction"
    },
    {
        WorkImage:Works3,
         ItemTitle1:"Project title",
         ItemTitle2:" UI, Art Direction"
    },
    {
        WorkImage:Works4,
         ItemTitle1:"Project title",
         ItemTitle2:" UI, Art Direction"
    },
    {
        WorkImage:Works5,
         ItemTitle1:"Project title",
         ItemTitle2:" UI, Art Direction"
    },
    {
        WorkImage:Works6,
         ItemTitle1:"Project title",
         ItemTitle2:" UI, Art Direction"
    }]
  return (
  <div class="Latestwork">
            <h2 class="latest">Latest work</h2>
            <div class="grid1">

                {
                    Works.map((i)=>(
                        <div className='Works1'>
                            <img src={i.WorkImage} alt='workImage' height="330px" width="450px" />
                            <div className='i1'>{i.ItemTitle1}</div>
                            <div className='i2'>{i.ItemTitle2}</div>
                        </div>    
                    ))
                }

                {/* <div>
                    <img src="photos/Project title.png" alt="no Image" width="440">
                    <h3>Project title</h3>
                    <h5>UI, Art drection</h5>
                </div>
                <div>
                    <img src="photos/Project title2.png" alt="no Image" width="440">
                    <h3>Project title</h3>
                    <h5>UI, Art drection</h5>
                </div>
                <div>
                    <img src="photos/Project title3.png" alt="no Image" width="440">
                    <h3>Project title</h3>
                    <h5>UI, Art drection</h5>
                </div>
                <div>
                    <img src="photos/Project title4.png" alt="no Image" width="440">
                    <h3>Project title</h3>
                    <h5>UI, Art drection</h5>
                </div>
                <div>
                   <img src="photos/Project title5.png" alt="no Image" width="440">
                   <h3>Project title</h3>
                   <h5>UI, Art drection</h5>
                </div>
                <div>
                    <img src="photos/Project title6.png" alt="no Image" width="440">
                    <h3>Project title</h3>
                    <h5>UI, Art drection</h5>
                </div> */}
            </div>
        </div>
  );
}

export default Latestwork;

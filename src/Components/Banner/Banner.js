import React from 'react';
import './Banner.css'
import banner from '../../Photo/istockphoto-1270541371-1024x1024.jpg'

const Banner = () => {
    return (
        <div>
            <body background={banner} className="bannerDesign" > 
                <h1>League Hub</h1>
            </body>
        </div>
    );
};

export default Banner;
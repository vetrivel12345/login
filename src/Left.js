import React from 'react';
import { Carousel } from 'antd';

function Left() {
    const contentStyle = {
        height: '200px',
        color: '#fff',
        
        textAlign: 'center',
    
      };
  return <div>
  <Carousel autoplay>
  <div>
    <h3 style={contentStyle}><img src="https://tamil.hostrain.in/hg-banner1.jpg" alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src="https://tamil.hostrain.in/hg-banner2.jpg" alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src="https://tamil.hostrain.in/hg-banner3.jpg" alt="" /></h3>
  </div>
  <div>
    <h3 style={contentStyle}><img src="https://tamil.hostrain.in/hg-banner4.jpg" alt="" /></h3>
  </div>
</Carousel>,
  </div>;
}

export default Left;





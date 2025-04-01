 import React from 'react';
 import Banner from './Banner';
 import './HomeScreen.css';
 import Nav from './Nav.js';
 import requests from './Requests';


 function HomeScreen() {
   return (
     <div className='HomeScreen'>
        
        <Nav />
        
        <Banner/>

        {/* Row */}
     </div>
   )
 }
 
 export default HomeScreen;
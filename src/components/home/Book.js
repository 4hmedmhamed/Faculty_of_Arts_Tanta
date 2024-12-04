

import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Gallary from './Gallary';
// import { Scrolling } from './Scrolling';
// import Scrolling from './Scrolling';


const Book = (AppProps, AppState) => {



  return (

    <div className='GAllry_bg m-2' style={{height:"100vh" }}>
      <h2 className='text-primary text-center'>Group_9</h2>
      <div style={{height:"90vh" , backgroundImage:"./"}}>
      <Gallary />
      </div>
 
    </div>
  );
}


export default Book;




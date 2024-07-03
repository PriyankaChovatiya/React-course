import React from 'react';
import ReactDOM from 'react-dom';


//React Element 
const heading = React.createElement("h1" , {id:"heading" , className:"heading"}, " hello ");

//Functional component
const HeadingCompont = () => (
<div id=" Container">
  <h1 id = "heading" className = "heading">
    Welcome To React Class
  </h1>
  </div>
);

// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(heading);
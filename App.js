import React from 'react';
import ReactDOM from 'react-dom';


//React Element 
const heading = <h1 id="heading" className="heading"></h1>

//Functional component
const HeadingComponent = () => (
<div id=" Container">
  <h1 id = "heading" className = "heading">
    Welcome To React Class
  </h1>
  </div>
);

// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render an element
root.render(heading);

//render component
root.render(<HeadingComponent/>);

import React from 'react';
import ReactDOM from 'react-dom';


const title = <h1 id="heading" className="heading">Hello Priyaa!</h1>

//Component Composition
const HeadingComponent = () => (
<div id=" Container">
  {title}
  <h1 id = "heading" className = "heading">
    Welcome To React Class
  </h1>
  </div>
);

//create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(<HeadingComponent/>);

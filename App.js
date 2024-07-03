import React from 'react';
import ReactDOM from 'react-dom';



const Title = () => <h1 id="heading" className="heading">Hello Priyaa!</h1>

//Component Composition
const HeadingComponent = () => (
<div id=" Container">
  <h1 id = "heading" className = "heading">
    Welcome To React Class
  </h1>
  </div>
);

const Display = () =>
  <div id= "Container2">
    <HeadingComponent/>
    <Title/>
       <p>  
        Hello, I'm Priyaa Today I'm Explaining the Component Composition. Component Composition : It means you are calling one components in another copmponent.
        </p>
  </div>


// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

//render component
root.render(<Display/>);


import React from 'react';
import ReactDOM from 'react-dom';

//Java script functional component
//const App = () => {   }


//Two types of component - capital letter
//Class component 


//Functional component
//1st way
const jsxheading1  = () => {
  return <h1 id = "heading">Welcome to the React Course</h1>
};

//2nd way - but some time developer are not write Return 
const jsxheading2 = () => {(
  <h1 id ="heading" className="heading">
    Welcome To React Class
  </h1>
)};

//3rd way
const jsxheading3 = () => (<h1>Hello</h1>);


// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(jsxheading1);
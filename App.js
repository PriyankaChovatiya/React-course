import React from 'react';
import ReactDOM from 'react-dom';

// core React - create the element

const heading  = React.createElement("h1", {id:"heading"} , "Hello Form React World" );

//JSX - (Transpiled before it reaches the JS) - PARCEL - BABEL
//JSX => React.createElement =>React Element => Js object => HTMLElement

//Single line JSX
const jsxheading  = <h1 id = "heading">Welcome to the React Course</h1>;

//Multi line JSX
const jsxheading2 = (
<h1 id ="heading">
   Welcome To React Class
</h1>
);


// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(jsxheading2);
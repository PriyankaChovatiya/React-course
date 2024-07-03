import React from 'react';
import ReactDOM from 'react-dom';

// core React - create the element

const heading  = React.createElement("h1", {id:"heading"} , "Hello Form React World" );

//JSX - (Transpiled before it reaches the JS) - PARCEL - BABEL
//JSX => React.createElement =>React Element => Js object => HTMLElement

//Single line 
const jsxheading  = <h1>Welcome to the React Course</h1>;


// create Root 
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(jsxheading);
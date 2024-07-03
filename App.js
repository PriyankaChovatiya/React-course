import React from 'react';
import ReactDOM from 'react-dom';

// core React - create the element

const heading  = React.createElement("h1", {id:"heading"} , "Hello Form React World" );


const root = ReactDOM.createRoot(document.getElementById("root"));

// render the root
root.render(heading);
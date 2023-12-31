const heading = React.createElement("h1",{id:"title",},"heading 1");   //what is an Reactelement : it is an object
const heading2 = React.createElement("h2",{ id :" title",},"heading 2")

const  container = React.createElement("div",{id:"container"},[heading,heading2]);
 
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react element inside the root
root.render(container);


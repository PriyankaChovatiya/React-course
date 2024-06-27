const heading = React.createElement("h1",{}, "Hello World From React World!");
const heading2 = React.createElement("h1",{},"React tutorial");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading,heading2);

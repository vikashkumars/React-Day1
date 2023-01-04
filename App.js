const heading = React.createElement("h1",{
    id:"title",
},"heading 1");

const heading1 = React.createElement("h2",{
    id:"title",
},"heading 2");

const container = React.createElement("div",{id:"container",},
[heading,heading1]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(container);



/* const heading1 = React.createElement("h2",{},"Namaste Everyone!");
const root1 = ReactDOM.createRoot(document.getElementById("header"));
root1.render(heading1); */

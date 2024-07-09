const heading = React.createElement("h1", { id: "heading" }, "hellow");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

<div id="parent">
  <div id="child1">
    <h1></h1>
  </div>
  <div id="child2">
    <h1></h1>
  </div>
</div>;

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, hellow)
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", {}, hellow)
  ),
]);

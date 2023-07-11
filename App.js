/**
 * <div id = 'parent'>
 *      <div id='child1'>
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 * <div id='child2'>
 *          <h1>I'm a h1 tag</h1>
 *          <h2>I'm a h2 tag</h2>
 *      </div>
 *
 * </div>
 * React.createELment => ReactElement(JS Object) => HTMLElement(render)(Browser understands)
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is a Namaste React 🚀"),
    React.createElement("h2", {}, "I m a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I m a h1 tag"),
    React.createElement("h2", {}, "I m a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
// console.log(heading); // return js object

// JSX - HTML-like or XML-like syntax
// JSX - transpiled before it reaches the JS Engine - transfiling is done by PARCEL => Babel
// JSX ==> Babel traspiles it to React.createElement => ReactElement - JS object => HTML Element(render)

// React Element
const Title = () => (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);
// console.log(jsxheading);

// React Functional Component
// React Fragment - behaves like an empty tags
const HeadingComponent = () => (
  <>
    <div id="container">
      {Title()}
      // <Title />
      // <Title></Title>
      <h1 className="heading">Namaste React Functional Component</h1>;
    </div>
    <div id="contianer2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);
root.render(<HeadingComponent />);

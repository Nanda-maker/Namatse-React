import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserClass from "./components/UserClass";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

/**
 * Header
 * - logo
 * - nav itmes
 * Body
 * - search
 * - restaurant container
 *    - restaurant card
 *      - image
 *      - name os restaurant
 *      - rating
 *      - delivery time
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 *
 *
 */

// chunking
// Code splitting
// lazy loading
// on demand loading
// dynamic import
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  // authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    // make an API call and send username and password
    const data = {
      name: "Nanda Kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// /**
//  * <div id='parent'>
//  *  <div id = 'child'>
//  *    <h1>Namaste React</h1>
//  *    <h2>React is here!</h2>
//  *  </div>
//  * </div>
//  * ReactElement(Object) => HTML(Understanding browser)
//  * */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Namaste React"),
//     React.createElement("h2", {}, "React is here!"),
//   ])
// );
// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);
// // JSX is HTML-like or XML-Like syntax
// // JSX transpiled to-babel=> React.createElement => ReactElement(js object) => HTMLElement(render)
// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
// console.log(jsxHeading);
// //React Functional Component
// const HeadingComponent = () => {
//   return <h1 id="heading">Namaste React using Functional Component</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

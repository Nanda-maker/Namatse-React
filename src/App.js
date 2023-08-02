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
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

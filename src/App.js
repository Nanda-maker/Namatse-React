import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

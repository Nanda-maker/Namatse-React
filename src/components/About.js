import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { render } from "react-dom";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    //  console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>this is namatse react web series</h2>
        <UserClass name={"Nanda kr (classes)"} location={"Thimphu"} />Í
      </div>
    );
  }
}

export default About;

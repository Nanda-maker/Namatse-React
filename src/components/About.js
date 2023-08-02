import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { render } from "react-dom";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className=" text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>this is namatse react web series</h2>
        <UserClass name={"Nanda kr (classes)"} location={"Thimphu"} />Í
      </div>
    );
  }
}

export default About;

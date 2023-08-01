import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: { name: "Dummy", location: "Default" },
    };
    // console.log("Child constructor");
  }
  async componentDidMount() {
    // console.log("Child Component Did Mount");
    // API call
    const data = await fetch("https://api.github.com/users/nanda-maker");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    // console.log("child render");
    const { name, location, avatar_url } = this.state.userInfo;
    //  debugger;
    return (
      <div className="user-card">
        {/*<h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // count2: this.state.count2 + 1,
            });
          }}
        >
          On Click Count
        </button>*/}
        <img src={avatar_url} alt="" />
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>contact: @nanda_kr_gurungg@threads.net</h3>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */

import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  useEffect(() => {
    // API call
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log("UseEffect is called");
    // this return function will call only on click of next component or page
    return () => {
      clearInterval(timer);
      console.log("useeffect returns");
    };
  }, []);
  console.log("render");
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count1:{count1}</h1>
      <h1>Name:{name}</h1>
      <h2>Location:Thimphu</h2>
      <h3>contact: @nanda_kr_gurungg@threads.net</h3>
    </div>
  );
};

export default User;

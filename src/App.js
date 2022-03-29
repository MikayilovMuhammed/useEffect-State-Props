import "./App.css";
import React from "react";
import { getData } from "./actions";
import Users from "./Users";
import UsersTwo from "./UsersTwo";

// HOOK
function App() {
  const [state, setState] = React.useState([]);

  const handleClick = () => {
    console.log("Clicked");
  };
  React.useEffect(() => {
    getData(setState);
  }, []);

  return (
    <>
      <div>
        {/* {state?.map(({ id, username }) => (
          <Users
            username={username}
            key={id}
            group={"P320"}
            clicked={handleClick}
            state={state}
            handle={() => {}}
          />
        ))} */}

        <UsersTwo username={"Salam"} />

        <button onClick={handleClick}>Click from App</button>
      </div>
    </>
  );
}

export default App;

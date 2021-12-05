import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Tasks from "./components/Tasks";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {!login ? (
        <>
          <Signup />
          <br />
          <hr />
          <br />
          <Login setLogin={setLogin} />
        </>
      ) : (
        <>
          <Tasks />
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            logout{" "}
          </button>
        </>
      )}
    </>
  );
}

export default App;

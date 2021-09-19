import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserClassComponent from "./UserClassComponent";
import UserHooksComponent from "./UserHooksComponent";
import AxiosClassComponent from "./AxiosClassComponent";
import AxiosHooksComponent from "./AxiosHooksComponent";
import "./styles.css";

function Button({ title, children }) {
  let [toggle, setToggle] = useState(false);
  return (
    <section>
      <button className="primary" onClick={() => setToggle(!toggle)}>
        {toggle ? `HIDE ${title}` : `SHOW ${title}`}
      </button>
      {toggle && children}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <section>
        <h2>Using Fetch</h2>
        <Button title="FETCH CLASS">
          <UserClassComponent />
        </Button>
        <Button title="FETCH HOOKS">
          <UserHooksComponent />
        </Button>
      </section>
      <section>
        <h2>Using Axios</h2>
        <Button title="AXIOS CLASS">
          <AxiosClassComponent />
        </Button>
        <Button title="AXIOS HOOKS">
          <AxiosHooksComponent />
        </Button>
      </section>
    </div>
  );
}

export default App;

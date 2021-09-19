import React, { useState, useEffect } from "react";
import { RANDOM_USER_API } from "./Constants";

export default function UserInfo() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch(RANDOM_USER_API, { signal: signal })
      .then((results) => results.json())
      .then((data) => {
        setUser(data);
      });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h4>Hooks</h4>
      {user === null ? (
        <p>Loading Hooks Data ...</p>
      ) : (
        <pre>{JSON.stringify(user, null, 4)}</pre>
      )}
    </div>
  );
}

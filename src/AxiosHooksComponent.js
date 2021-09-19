import React, { useState, useEffect } from "react";
import { RANDOM_USER_API } from "./Constants";
import axios from "axios";

export default function AxiosHooksComponent() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        axios
          .get(RANDOM_USER_API, { cancelToken: source.token })
          .then((data) => {
            setUser(data.data);
          });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      //console.log("cleaning");
      source.cancel();
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

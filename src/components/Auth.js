import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      {/* EXACT heading text */}
      <h2>Click on the checkbox to get authenticated</h2>

      {/* EXACT message text */}
      <p>
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated"}
      </p>

      {/* EXACT checkbox label */}
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I'm not a robot
      </label>
    </div>
  );
};

export default Auth;
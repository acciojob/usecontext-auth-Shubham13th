import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />
        I am not a robot
      </label>

      {/* 👇 IMPORTANT: exact text */}
      <p>
        {isAuthenticated
          ? "User is authenticated."
          : "User is not authenticated."}
      </p>
    </div>
  );
};

export default Auth;
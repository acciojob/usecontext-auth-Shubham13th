import React from "react";
import Auth from "./components/Auth";

const App = () => {
  return (
    <div>
      <h2>Mock Authentication using useContext</h2>
      <Auth />
    </div>
  );
};

export default App;

// ✅ ADD THIS LINE
export { Auth };
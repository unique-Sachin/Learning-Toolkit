import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserDetails />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { CardOne, CardTwo, Navbar, Profile } from "./component";

function App() {
  return (
    <div className="w-full h-max	" style={{ backgroundColor: "#1A1B20" }}>
      <Navbar />
      <div className="w-full px-72  py-10 flex flex-wrap justify-between">
        {/*
        <CardOne owner="Elon Musk" date="Jun 23, 2021" />
        <CardTwo />
        */}
        <Profile/>
      </div>
    </div>
  );
}

export default App;

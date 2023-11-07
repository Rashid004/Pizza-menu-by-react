/** @format */
import React from "react";
import ReactDom from "react-dom/client";

function App() {
  return (
    <div>
      <img src="logo192.png" alt="react img" />
      <h1> Hellow React!!</h1>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

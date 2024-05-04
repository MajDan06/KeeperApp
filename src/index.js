import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

//CHALLENGE:
//1. Implement the add note functionality.
//2. Implement the delete note functionality
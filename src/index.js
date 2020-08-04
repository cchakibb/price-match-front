import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./components/Auth/UserProvider";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/home.css";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/footer.css";
import "./styles/form.css";
import "./styles/header.css";
import "./styles/profile.css";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

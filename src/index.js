import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//React context
import { UserProvider } from "./context/usercontext";
import { Productprovider } from "./context/productscontext";
import { Cartprovider } from "./context/cartcontext";
// react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* its like a component in routing */}
    <BrowserRouter>
      <UserProvider>
        <Productprovider>
          <Cartprovider>
            <App />
          </Cartprovider>
        </Productprovider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

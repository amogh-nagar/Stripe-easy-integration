import Component from "./Component";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
function App() {
  // const makepayment = (token) => {
  //   const body = {
  //     token,
  //     product,
  //   };
  //   console.log(token);
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   fetch("http://localhost:5000/payment", {
  //     method: "POST",
  //     headers: headers,
  //     body: JSON.stringify(body),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// FIRST WAY TO USE REAC
// import ReactDOM from "react-dom";
// ReactDOM.render(
// 	<BrowserRouter>
// 	<App />,
// 	</BrowserRouter>,
//     document.getElementById('root')
// );

// SECOND WAY TO USE REACT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
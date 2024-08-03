import React from "react";
import './App.css'
import { routes } from "./Routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
	let router = useRoutes(routes);

	return (
		<div>
			<TopBar />
			<div className="container">
				<SideBar />
				{router}
			</div>
		</div>
	);
}

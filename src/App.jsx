import React from "react";
import { routes } from "./Routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";

export default function App() {
	let router = useRoutes(routes);

	return (
		<div>
			<TopBar />
			{router}
		</div>
	);
}

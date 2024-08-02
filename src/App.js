import React from "react";
import { routes } from "./Routes";
import { useRoutes } from "react-router-dom";

export default function App() {
	let router = useRoutes(routes);

	return <div>{router}</div>;
}

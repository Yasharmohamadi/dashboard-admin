import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { chartData } from "../../Data";
import "./Home.css";

export default function Home() {
	return (
		<div className="home-wrapper">
			<Features />
			<Chart grid data={chartData} title="Month Sales"/>
		</div>
	);
}

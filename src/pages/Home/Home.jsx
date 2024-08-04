import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import WidgetSM from "../../components/WidgetSM/WidgetSM";
import WidgetLG from "../../components/WidgetLG/WidgetLG";
import { chartData } from "../../Data";
import "./Home.css";

export default function Home() {
	return (
		<div className="home-wrapper">
			<Features />
			<Chart grid data={chartData} title="Month Sales"/>
			<div className="home-widgets">
				<WidgetSM/>
				<WidgetLG/>
			</div>
		</div>
	);
}

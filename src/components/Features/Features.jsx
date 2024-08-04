import React from "react";
import "./Features.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function Features() {
	return (
		<div className="features">
			<div className="features-item">
				<span className="features_title">Revanue</span>
				<div className="features_container">
					<span className="features_price">$2,522</span>
					<span className="features_rate">
						+9
						<ArrowUpward className="fearures_icon" />
					</span>
				</div>
				<div className="features_sub">Compared to last month</div>
			</div>
			<div className="features-item">
				<span className="features_title">Costs</span>
				<div className="features_container">
					<span className="features_price">$403.5</span>
					<span className="features_rate">
						-12
						<ArrowDownward className="fearures_icon down" />
					</span>
				</div>
				<div className="features_sub">Compared to last month</div>
			</div>
			<div className="features-item">
				<span className="features_title">Sales</span>
				<div className="features_container">
					<span className="features_price">$26.8</span>
					<span className="features_rate">
						-2.3
						<ArrowDownward className="fearures_icon down" />
					</span>
				</div>
				<div className="features_sub">Compared to last month</div>
			</div>
		</div>
	);
}

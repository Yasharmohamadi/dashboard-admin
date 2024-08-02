import React from "react";
import { Notifications, Language, Settings } from "@mui/icons-material";
import "./TopBar.css";

export default function TopBar() {
	return (
		<div className="topbar">
			<div className="topbar_wrapper">
				<div className="topbar_left">
					<span className="logo">CMS</span>
				</div>
				<div className="topbar_right">
					<div className="topbar_icon-container">
						<Notifications />
						<span className="topbar_icon-badge">2</span>
					</div>
					<div className="topbar_icon-container">
						<Language />
						<span className="topbar_icon-badge">1</span>
					</div>
					<div className="topbar_icon-container">
						<Settings />
					</div>
					<img className="topbar_img" src="./Images/prof.jpg" />
				</div>
			</div>
		</div>
	);
}

import React from "react";
import { Visibility } from "@mui/icons-material";
import "./WidgetSM.css";
import { newUsers } from "../../Data";

export default function WidgetSM() {
	return (
		<div className="widgetsm">
			<h3 className="widgetsm_title">New Join Member</h3>
			<ul className="widgetsm_list">
				{newUsers.map((user) => (
					<li key={user.id} className="widgetsm-item">
						<img src={user.img} className="widgetsm-item_img" />
						<div className="widgetsm-item_user">
							<span className="widgetsm_user-name">{`${user.name} ${user.family}`}</span>
							<span className="widgetsm_user-job">{user.job}</span>
						</div>
						<button className="widgetsm-item_button">
							<Visibility className="widgetsm-button_icon" />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

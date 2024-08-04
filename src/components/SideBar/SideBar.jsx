import React from "react";
import {
	Home,
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	ChatBubbleOutline,
	MessageOutlined,
	InfoOutlined,
	SupervisedUserCircle,
} from "@mui/icons-material";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebar_wrapper">
				<div className="sidebar-menu">
					<h3 className="sidebar-menu_title">Dashboard</h3>
					<ul className="sidebar-menu_list">
						<Link to="/home" className="link">
							<li className="sidebar-menu_item active F" >
								<Home className="sidebar-menu-icon" />
								Home
							</li>
						</Link>
						<li className="sidebar-menu_item">
							<Timeline className="sidebar-menu-icon" />
							Analystics
						</li>
						<li className="sidebar-menu_item">
							<BarChart className="sidebar-menu-icon" />
							Sales
						</li>
					</ul>
				</div>
				<div className="sidebar-menu">
					<h3 className="sidebar-menu_title">Quick Menu</h3>
					<ul className="sidebar-menu_list">
						<Link to="/users" className="link">
							<li className="sidebar-menu_item">
								<SupervisedUserCircle className="sidebar-menu-icon" />
								Users
							</li>
						</Link>
						<Link to="/newuser" className="link">
							<li className="sidebar-menu_item">
								<PermIdentity className="sidebar-menu-icon" />
								New User
							</li>
						</Link>
						<Link to="/products" className="link">
							<li className="sidebar-menu_item">
								<Storefront className="sidebar-menu-icon" />
								Products
							</li>
						</Link>
						<li className="sidebar-menu_item">
							<AttachMoney className="sidebar-menu-icon" />
							Transaction
						</li>
						<li className="sidebar-menu_item">
							<TrendingUp className="sidebar-menu-icon" />
							Chart
						</li>
					</ul>
				</div>
				<div className="sidebar-menu">
					<h3 className="sidebar-menu_title">Notification</h3>
					<ul className="sidebar-menu_list">
						<li className="sidebar-menu_item">
							<MailOutline className="sidebar-menu-icon" />
							Main
						</li>
						<li className="sidebar-menu_item">
							<ChatBubbleOutline className="sidebar-menu-icon" />
							Feedback
						</li>
						<li className="sidebar-menu_item">
							<MessageOutlined className="sidebar-menu-icon" />
							Message
						</li>
					</ul>
				</div>
				<div className="sidebar-menu">
					<h3 className="sidebar-menu_title">Staff</h3>
					<ul className="sidebar-menu_list">
						<li className="sidebar-menu_item">
							<LineStyle className="sidebar-menu-icon" />
							Manage
						</li>
						<li className="sidebar-menu_item">
							<InfoOutlined className="sidebar-menu-icon" />
							Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

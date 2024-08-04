import React from "react";
import "./WidgetLG.css";

export default function WidgetLG() {
	const Button = ({ type }) => {
		return <button className={`widgetlg-status ${type}`}>{type}</button>;
	};

	return (
		<div className="widgerlg">
			<h3 className="widgetlg_title">Last Action</h3>
			<table className="widgetlg_table">
				<tr className="widgetlg-table_row">
					<th className="widgetlg-table_head">Customer</th>
					<th className="widgetlg-table_head">Date</th>
					<th className="widgetlg-table_head">Amount</th>
					<th className="widgetlg-table_head">Status</th>
				</tr>
				<tr className="widgetlg-table_row">
					<td className="widgetlg-table-data data_user">
						<img className="user_img" src="images/prof.jpg" />
						<span className="user_title">Yashar</span>
					</td>
					<td className="widgetlg-table-data data_date">18 Aug 2024</td>
					<td className="widgetlg-table-data data_amount">$99.2</td>
					<td className="widgetlg-table-data data_status">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetlg-table_row">
					<td className="widgetlg-table-data data_user">
						<img className="user_img" src="images/prof.jpg" />
						<span className="user_title">Yashar</span>
					</td>
					<td className="widgetlg-table-data data_date">18 Aug 2024</td>
					<td className="widgetlg-table-data data_amount">$99.2</td>
					<td className="widgetlg-table-data data_status">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetlg-table_row">
					<td className="widgetlg-table-data data_user">
						<img className="user_img" src="images/prof.jpg" />
						<span className="user_title">Yashar</span>
					</td>
					<td className="widgetlg-table-data data_date">18 Aug 2024</td>
					<td className="widgetlg-table-data data_amount">$99.2</td>
					<td className="widgetlg-table-data data_status">
						<Button type="Pending" />
					</td>
				</tr>
			</table>
		</div>
	);
}

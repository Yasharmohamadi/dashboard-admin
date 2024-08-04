import React from "react";
import "./WidgetLG.css";
import { actions } from "../../Data";


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
				{actions.map((act)=> (
				<tr className="widgetlg-table_row">
					<td className="widgetlg-table-data data_user">
						<img className="user_img" src="images/prof.jpg" />
						<span className="user_title">{act.customer}</span>
					</td>
					<td className="widgetlg-table-data data_date">{act.date}</td>
					<td className="widgetlg-table-data data_amount">${act.amount}</td>
					<td className="widgetlg-table-data data_status">
						<Button type={act.status} />
					</td>
				</tr>

				))}
			</table>
		</div>
	);
}

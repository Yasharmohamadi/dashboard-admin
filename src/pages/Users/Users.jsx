import React, { useEffect, useState } from "react";
import "./Users.css";
import { allUsers } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Users() {
	const [users, setUsers] = useState(allUsers);

	const userDeleteHandler = (userID) => {
		setUsers(users.filter((user) => user.id != userID));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 50 },
		{
			field: "user",
			headerName: "User",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="username-wrapper">
						<Link to={`/users/${params.row.id}`} className="link">
							<img className="username_img" src={params.row.avatar} />
							<span className="username_title">{params.row.username}</span>
						</Link>
					</div>
				);
			},
		},
		{ field: "transactions", headerName: "Transactions", width: 100 },
		{ field: "status", headerName: "Status", width: 100 },
		{ field: "email", headerName: "Email", width: 150 },
		{
			field: "actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="actions-wrapper">
						<DeleteOutline
							className="action action_delete"
							onClick={() => userDeleteHandler(params.row.id)}
						/>

						<Link to={`/users/${params.row.id}`}>
							<Edit className="action action_edit" />
						</Link>
					</div>
				);
			},
		},
	];

	return (
		<div className="userslist">
			<h3 className="userslist_title">Users</h3>
			<DataGrid
				rows={users}
				columns={columns}
				className="userslist-datagrid"
				checkboxSelection

			/>
		</div>
	);
}

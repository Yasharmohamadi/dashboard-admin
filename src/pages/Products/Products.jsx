import React, { useEffect, useState } from "react";
import "./Products.css";
import { allBooks } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import AddProduct from "./../../components/AddProduct/AddProduct";

export default function Products() {
	const [books, setBooks] = useState([]);

	const getData = () => {
		fetch("http://localhost:8000/api/products")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	};

	useEffect(() => {
		getData();
	}, []);

	const productDeleteHandler = (productID) => {};

	const columns = [
		{ field: "id", headerName: "ID", width: 50 },
		{
			field: "product",
			headerName: "Product",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="productsname-wrapper">
						<Link to={`/products/${params.row.id}`} className="link">
							<img className="products_img" src={params.row.img} />
							<span className="products_title">{params.row.title}</span>
						</Link>
					</div>
				);
			},
		},
		{ field: "price", headerName: "Price", width: 100 },
		{ field: "count", headerName: "Count", width: 100 },
		{
			field: "actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="actions-wrapper">
						<DeleteOutline
							className="action action_delete"
							onClick={() => {
								productDeleteHandler(params.row.id);
							}}
						/>

						<Link to={`/products/${params.row.id}`}>
							<Edit className="action action_edit" />
						</Link>
					</div>
				);
			},
		},
	];

	return (
		<div>
			<div className="productslist">
				<h3 className="productslist_title">Products List</h3>
				{books ? (
					<DataGrid
						rows={books}
						columns={columns}
						className="productslist-datagrid"
						pageSize={3}
						checkboxSelection
					/>
				) : (
					<Alert severity="error">
						an Error appeared, Please Check Your Internet Connection !
					</Alert>
				)}
			</div>

			<AddProduct />
		</div>
	);
}

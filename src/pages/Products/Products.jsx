import React, { useEffect, useState } from "react";
import "./Products.css";
import { allBooks } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Products() {
	const [books, setBooks] = useState(allBooks);

	const productDeleteHandler = (bookID) => {
		setBooks(books.filter((book) => book.id != bookID));
	};

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
							<span className="products_title">{params.row.name}</span>
						</Link>
					</div>
				);
			},
		},
		{ field: "price", headerName: "Price", width: 100 },
		{ field: "amount", headerName: "Amount", width: 100 },
		{
			field: "actions",
			headerName: "Actions",
			width: 150,
			renderCell: (params) => {
				return (
					<div className="actions-wrapper">
						<DeleteOutline
							className="action action_delete"
							onClick={() => productDeleteHandler(params.row.id)}
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
		<div className="productslist">
			<h3 className="productslist_title">Products List</h3>
			<DataGrid
				rows={books}
				columns={columns}
				className="productslist-datagrid"
				pageSize={3}
        checkboxSelection
			/>
		</div>
	);
}

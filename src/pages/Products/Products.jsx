import React, { useEffect, useState } from "react";
import "./Products.css";
import { allBooks } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import AddProduct from "./../../components/AddProduct/AddProduct";
import Modal from "./../../components/Modal/Modal";

export default function Products() {
	const [books, setBooks] = useState([]);
	const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
	const [isShowEditModal, setIsShowEditModal] = useState(false);
	const [productID, setProductID] = useState(null);

	const [productNewName, setProductNewName] = useState("");
	const [productNewPrice, setProductNewPrice] = useState("");
	const [productNewCount, setProductNewCount] = useState("");

	useEffect(() => {
		getData();
	}, []);

	const inputNameValueHandler = (event) => {
		setProductNewName(event.target.value);
	};
	const inputPriceValueHandler = (event) => {
		productNewPrice(event.target.value);
	};
	const inputCountValueHandler = (event) => {
		productNewCount(event.target.value);
	};

	const editModalCancelAction = () => {
		setIsShowEditModal(false);
	};
	const editModalSubmitAction = () => {
		setIsShowEditModal(false);

	};

	const deleteModalCancelAction = () => {
		setIsShowDeleteModal(false);
	};
	const deleteModalSubmitAction = () => {
		fetch(`http://localhost:8000/api/products/${productID}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((result) => {
				getData();
				setIsShowDeleteModal(false);
			});
	};

	const getData = () => {
		fetch("http://localhost:8000/api/products")
			.then((res) => res.json())
			.then((data) => setBooks(data));
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
							<img className="products_img" src="./Images/book.png" />
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
								setIsShowDeleteModal(true);
								setProductID(params.row.id);
							}}
						/>

						<Edit
							className="action action_edit"
							onClick={() => {
								setIsShowEditModal(true);
								setProductID(params.row.id);
								setProductNewName(params.row.title);
								setProductNewPrice(params.row.price);
								setProductNewCount(params.row.count);
							}}
						/>
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
			{isShowDeleteModal && (
				<Modal
					title="Do you want to delete this product?"
					submitAction={deleteModalSubmitAction}
					cancelAction={deleteModalCancelAction}
				/>
			)}
			{isShowEditModal && (
				<Modal
					children={
						<div className="edit_input_container">
							<input
								dir="rtl"
								className="edit_input"
								placeholder="New name ..."
								value={productNewName}
								onChange={inputNameValueHandler}
							/>
							<input
								className="edit_input"
								placeholder="New price ..."
								value={productNewPrice}
								onChange={inputPriceValueHandler}
							/>
							<input
								className="edit_input"
								placeholder="New count ..."
								value={productNewCount}
								onChange={inputCountValueHandler}
							/>
						</div>
					}
					title="Enter new product infos"
					submitAction={editModalSubmitAction}
					cancelAction={editModalCancelAction}
				/>
			)}

			<AddProduct />
		</div>
	);
}

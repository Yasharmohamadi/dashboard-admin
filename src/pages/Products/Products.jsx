import React, { useEffect, useState } from "react";
import "./Products.css";
import { allBooks } from "../../Data";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { Link, json } from "react-router-dom";
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

	const editModalCancelAction = () => {
		setIsShowEditModal(false);
	};
	const editModalSubmitAction = () => {
		// let productNewInfos = {
		// 	id: productID,
		// 	titel: productNewName,
		// 	price: productNewPrice,
		// 	count: productNewCount,
		// 	img: '',
		// 	popularity: '',
		// 	sale: '',
		// 	colors: '',

		// };
		setIsShowEditModal(false);

		// fetch(`http://localhost:8000/api/products/${productID}`, {
		// 	method: "PUT",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(productNewInfos),
		// })
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		console.log(result);
		// 		getData();
		// 		setIsShowEditModal(false);
		// 	});
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
								onChange={(event) => setProductNewName(event.target.value)}
							/>
							<input
								className="edit_input"
								placeholder="New price ..."
								value={productNewPrice}
								onChange={(event) => setProductNewPrice(event.target.value)}
							/>
							<input
								className="edit_input"
								placeholder="New count ..."
								value={productNewCount}
								onChange={(event) => setProductNewCount(event.target.value)}
							/>
						</div>
					}
					title="Enter new product infos"
					submitAction={editModalSubmitAction}
					cancelAction={editModalCancelAction}
				/>
			)}

			{/* AddProduct */}
			<div className="addProduct_wrapper">
				<h3 className="addProduct_title">Add New Product</h3>

				<div className="form-wrapper">
					<form className="addform">
						<div className="form-inputs">
							<input
								type="text"
								className="add_input"
								placeholder="Name ..."
							/>

							<input
								type="number"
								className="add_input"
								placeholder="Price ..."
							/>

							<input
								type="number"
								className="add_input"
								placeholder="Count ..."
							/>

							{/* <select id="type" className="add_input">
							<option value="yes">Paper</option>
							<option value="no">Another</option>
						</select> */}
						</div>
						<button className="addform_btn">Add</button>
					</form>
				</div>
				{/* {isShowModal && (
				<Modal
					title="Do you want add new product?"
					submitAction={modalSubmitAction}
					cancelAction={modalCancelAction}
				/>
			)} */}
			</div>
		</div>
	);
}

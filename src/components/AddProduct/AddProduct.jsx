import React, { useState } from "react";
import "./AddProduct.css";
import Modal from "./../../components/Modal/Modal";

export default function AddProduct() {
	const [isShowModal, setIsShowModal] = useState(false);

	const modalSubmitAction = () => {
		setIsShowModal(false);
	};
	const modalCancelAction = () => {
		setIsShowModal(false);
	};
	const formSubmitHandler = (event) => {
		event.preventDefault()
		setIsShowModal(true);
	};

	return (
		<div className="addProduct_wrapper">
			<h3 className="addProduct_title">Add New Product</h3>

			<div className="form-wrapper">
				<form className="addform">
					<div className="form-inputs">
						<input type="text" className="add_input" placeholder="Name ..." />

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

						<select id="type" className="add_input">
							<option value="yes">Paper</option>
							<option value="no">Another</option>
						</select>
					</div>
					<button onClick={formSubmitHandler} className="addform_btn">
						Add
					</button>
				</form>
			</div>
			{isShowModal && (
				<Modal
					title="Do you want add new product?"
					submitAction={modalSubmitAction}
					cancelAction={modalCancelAction}
				/>
			)}
		</div>
	);
}

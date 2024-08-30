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


}

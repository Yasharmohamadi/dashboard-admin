import React, { useState } from "react";
import reactDOM from "react-dom";
import "./Modal.css";

export default function Modal({cancelAction, submitAction, title}) {
	return reactDOM.createPortal(
		<div className='modal_wrapper active'>
			<div className="modal">
				<h3 className="modal_title">{title}</h3>
				<div className="modal_btns">
					<button onClick={() => submitAction()} className="modal_btn modal_btn-yes">Yes</button>
					<button onClick={() => cancelAction()} className="modal_btn modal_btn-no">
						No
					</button>
				</div>
			</div>
		</div>,
		document.getElementById("modal_container")
	);
}

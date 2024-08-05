import React, { useEffect, useState } from "react";
import "./Product.css";
import Chart from "../../components/Chart/Chart";
import { allBooks } from "../../Data";
import { productData } from "../../Data";
import { useParams } from "react-router-dom";
import { Publish, Camera, Edit } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";

export default function Product() {
	const [products, setProduct] = useState(allBooks);

	let params = useParams();

	let mainProduct = products.filter((product) => {
		return product.id == params.id;
	});
	console.log(mainProduct[0]);

	return (
		<div className="product">
			<div className="product-top">
				<div className="top-infos">
					<div className="infos-left">
						<h3 className="infos-title">Product Details</h3>
						<img className="infos-img" src={mainProduct[0].img} />
					</div>
					<div className="infos-right">
						<div className="infos-details">
							<div className="details-left">
								<span className="detail-left">name:</span>
								<span className="detail-left">price:</span>
								<span className="detail-left">author:</span>
								<span className="detail-left">type:</span>
								<span className="detail-left">pages:</span>
								<span className="detail-left">Year:</span>
								<span className="detail-left">amunt:</span>
							</div>
							<div className="details-right">
								<span className="detail-right">{mainProduct[0].name}</span>
								<span className="detail-right">{mainProduct[0].price}</span>
								<span className="detail-right">Marx</span>
								<span className="detail-right">Paper</span>
								<span className="detail-right">312</span>
								<span className="detail-right">1875</span>
								<span className="detail-right">{mainProduct[0].amount}</span>
							</div>
						</div>
					</div>
				</div>
				
			<div className="product-bottom">
				<h3 className="edit-title">Edit Details</h3>
				<form className="bottom-form">
					<div className="form-left">
						<label className="name-label">Product Name :</label>
						<input
							type="text"
							className="name-input"
							placeholder="Enter New Name ..."
						/>

						<label className="price-label">Product Price :</label>
						<input
							type="number"
							className="price-input"
							placeholder="Enter New Price ..."
						/>

						<label className="stock-label">In Stock :</label>
						<select id="inStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="form-right">
						<div className="form-uploader">
							<button className="uploader_btn">
								<Camera />
							</button>

							<input className="file-input" type="file" />
						</div>
						<buton className='edit-btn'>
							Upload Images
								<Publish />
						</buton>
					</div>
				</form>
			</div>
			</div>

			<Chart
					data={productData}
					title="Month Product Sales"
					titleColor="#000"
					grid
				/>
		</div>
	);
}

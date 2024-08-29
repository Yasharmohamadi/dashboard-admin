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

	return (
		<div className="product">
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

			<Chart
				data={productData}
				title="Month Product Sales"
				titleColor="#000"
				grid
				aspectValue={1.7}
			/>
		</div>
	);
}

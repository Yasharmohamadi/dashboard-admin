import React from "react";
import {
	ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import './Chart.css'

export default function Chart({data, grid, title, dataKey, titleColor}) {
	
	return (
		<div className="chart">
			<h3 className="chart_title" style={{color: `${titleColor}`}}>{title}</h3>
			<ResponsiveContainer width='100%' aspect={3} className='chart_wrapper'>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke="#5550bd" />
					<Line type='monotone' dataKey='sale' stroke="#5550bd" />
					<Tooltip />
					{grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}

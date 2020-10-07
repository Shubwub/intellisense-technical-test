import React from "react";

export default function DataTable({ data }: { data: any[] }) {
	return (
		<table>
			<thead>
				<tr>
					<th>Metric</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				{data.map((sample, index) => (
					<tr key={index}>
						<td style={{ textAlign: "left" }}>{sample.name}</td>
						<td>{sample.values[sample.values.length - 1]}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

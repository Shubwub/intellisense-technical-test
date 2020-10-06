import React from "react";

export default function DataTable({ data }: { data: any[] }) {
	return (
		<table>
			<tr>
				<th>Metric</th>
				<th>Value</th>
			</tr>
			{data.map((sample) => (
				<tr>
					<td style={{ textAlign: "left" }}>{sample.name}</td>
					<td>{sample.values[sample.values.length - 1]}</td>
				</tr>
			))}
		</table>
	);
}

import React from "react";
import styles from "../molecules/Table.module.scss";

export default function DataSample({
	sample,
	index,
	addToGraph,
	removeFromGraph,
	selected,
}: {
	sample: any;
	index: number;
	addToGraph: any;
	removeFromGraph: any;
	selected: boolean;
}) {
	return (
		<li
			className={`${styles.tableRow} ${selected && styles.selectedRow}`}
			key={index}
			onClick={() => {
				selected ? removeFromGraph(sample.name) : addToGraph(sample);
			}}
		>
			<div
				className={`${styles.tableData} ${styles.leftTableCell} ${styles.leftData}`}
			>
				{sample.name}
			</div>
			<div className={`${styles.tableData} ${styles.rightTableCell}`}>
				{sample.values[sample.values.length - 1]}
			</div>
		</li>
	);
}

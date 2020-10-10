import React, { useState } from "react";
import styles from "../molecules/Table.module.scss";

export default function DataSample({
	sample,
	index,
	addToGraph,
	removeFromGraph,
}: {
	sample: any;
	index: number;
	addToGraph: any;
	removeFromGraph: any;
}) {
	const [selected, toggleSelected] = useState<boolean>(false);

	return (
		<li
			className={`${styles.tableRow} ${selected && styles.selectedRow}`}
			key={index}
			onClick={() => {
				selected ? removeFromGraph(sample.name) : addToGraph(sample);
				toggleSelected(!selected);
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

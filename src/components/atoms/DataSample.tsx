import React from "react";
import styles from "../molecules/Table.module.scss";

import { useDispatch } from "react-redux";
import { addData, removeData } from "../../redux/actions";

import { DataSampleInterface } from "../../interfaces";

export default function DataSample({
	sample,
	index,
	selected,
}: {
	sample: DataSampleInterface;
	index: number;
	selected: boolean;
}) {
	const dispatch = useDispatch();

	return (
		<li
			className={`${styles.tableRow} ${selected && styles.selectedRow}`}
			key={index}
			onClick={() => {
				selected
					? dispatch(removeData(sample.name))
					: dispatch(addData(sample));
			}}
		>
			<div
				className={`${styles.tableData} ${styles.leftTableCell} ${styles.leftData}`}
				data-name="sample-name"
			>
				{sample.name}
			</div>
			<div
				className={`${styles.tableData} ${styles.rightTableCell}`}
				data-name="sample-value"
			>
				{sample.values[sample.values.length - 1]}
			</div>
		</li>
	);
}

import React from "react";
import styles from "../molecules/Table.module.scss";

import { useDispatch } from "react-redux";
import { addData, removeData } from "../../redux/actions";

export default function DataSample({
	sample,
	index,
	selected,
}: {
	sample: any;
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
			>
				{sample.name}
			</div>
			<div className={`${styles.tableData} ${styles.rightTableCell}`}>
				{sample.values[sample.values.length - 1]}
			</div>
		</li>
	);
}

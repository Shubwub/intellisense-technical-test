import React, { useRef } from "react";
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
	const ref = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		if (selected) {
			dispatch(removeData(sample.name));
			if (ref.current) ref.current.blur();
		} else dispatch(addData(sample));
	};

	return (
		<li>
			<button
				id={`${sample.name}-button`}
				tabIndex={0}
				onClick={handleClick}
				ref={ref}
				className={`${styles.tableRow} ${selected && styles.selectedRow}`}
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
			</button>
		</li>
	);
}

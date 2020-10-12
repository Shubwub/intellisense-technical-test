import React, { useRef } from "react";
import styles from "../molecules/Table.module.scss";

import { useDispatch } from "react-redux";
import { addData, removeData } from "../../redux/actions";

import { DataSampleInterface } from "../../interfaces";

/**
 *  @param {DataSampleInterface} sample - An individual data sample containing
 *                                        a name, array of times, and an array
 *                                        of values.
 *
 *  @param {boolean} selected - A boolean to say whether the current sample
 *                              instance is already plotted on the graph.
 *
 *  This component is used as an entry in the data table. This was done to allow
 *  instance-specific logic depending on if the sample had been plotted to the
 *  graph or not.
 */
export default function DataSample({
	sample,
	selected,
}: {
	sample: DataSampleInterface;
	selected: boolean;
}) {
	const dispatch = useDispatch();
	const ref = useRef<HTMLButtonElement>(null);

	const handleClick = () => {
		if (selected) {
			dispatch(removeData(sample.name));
			// This blur is needed to allow for tabbing and usage with a spacebar
			if (ref.current) ref.current.blur();
		} else dispatch(addData(sample));
	};

	/* Returns a button nested in a <li> element for better semantic markup and to
	 *  allow for keyboard navigation for better accessibility
	 */
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

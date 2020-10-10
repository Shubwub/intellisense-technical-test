import React, { useState } from "react";
import styles from "./Table.module.scss";
import DataSample from "../atoms/DataSample";
import ChevronIcon from "../atoms/ChevronIcon";

export default function DataTable({
	data,
	setData,
	graphData,
	setGraphData,
}: {
	data: any[];
	setData: any;
	graphData: any[];
	setGraphData: any;
}) {
	const addToGraph = (sample: any) => {
		setGraphData([...graphData, sample]);
	};

	const removeFromGraph = (deleted: string) => {
		setGraphData(graphData.filter((data) => data.name !== deleted));
	};

	const [sorted, setSorted] = useState<string>("");

	return (
		<ul className={styles.table}>
			<li style={{ display: "flex" }}>
				<div
					className={`${styles.tableHead} ${styles.leftTableCell}`}
					onClick={() => {
						// useState will not pick up a change if array is not cloned before sort
						if (sorted === "stringASC") {
							setData(
								[...data].sort((a: any, b: any) => {
									const aName = a.name.toUpperCase();
									const bName = b.name.toUpperCase();
									if (aName > bName) {
										return -1;
									}
									return 1;
								})
							);
							setSorted("stringDESC");
						} else {
							setData(
								[...data].sort((a: any, b: any) => {
									const aName = a.name.toUpperCase();
									const bName = b.name.toUpperCase();
									if (aName < bName) {
										return -1;
									}
									return 1;
								})
							);
							setSorted("stringASC");
						}
					}}
				>
					Metric
					<ChevronIcon sorted={sorted} type="string" />
				</div>
				<div
					className={`${styles.tableHead} ${styles.rightTableCell}`}
					onClick={() => {
						// useState will not pick up a change if array is not cloned before sort
						if (sorted === "numberASC") {
							setData(
								[...data].sort(
									(a: any, b: any) =>
										b.values[b.values.length - 1] -
										a.values[a.values.length - 1]
								)
							);
							setSorted("numberDESC");
						} else {
							setData(
								[...data].sort(
									(a: any, b: any) =>
										a.values[a.values.length - 1] -
										b.values[b.values.length - 1]
								)
							);
							setSorted("numberASC");
						}
					}}
				>
					Value
					<ChevronIcon sorted={sorted} type="number" />
				</div>
			</li>
			{data.map((sample, index) => (
				<DataSample
					sample={sample}
					index={index}
					// array.some is O(log n) whereas map/filter are O(n)
					selected={graphData.some((data) => data.name === sample.name)}
					addToGraph={addToGraph}
					removeFromGraph={removeFromGraph}
				/>
			))}
		</ul>
	);
}

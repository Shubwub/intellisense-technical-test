import React from "react";
import styles from "./Table.module.scss";
import DataSample from "../atoms/DataSample";

export default function DataTable({
	data,
	graphData,
	setGraphData,
}: {
	data: any[];
	graphData: any[];
	setGraphData: any;
}) {
	const addToGraph = (sample: any) => {
		setGraphData([...graphData, sample]);
	};

	const removeFromGraph = (deleted: string) => {
		setGraphData(graphData.filter((data) => data.name !== deleted));
	};

	return (
		<ul className={styles.table}>
			<li style={{ display: "flex" }}>
				<div className={`${styles.tableHead} ${styles.leftTableCell}`}>
					Metric
				</div>
				<div className={`${styles.tableHead} ${styles.rightTableCell}`}>
					Value
				</div>
			</li>
			{data.map((sample, index) => (
				<DataSample
					sample={sample}
					index={index}
					addToGraph={addToGraph}
					removeFromGraph={removeFromGraph}
				/>
			))}
		</ul>
	);
}

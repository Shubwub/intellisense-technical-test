import React from "react";
import styles from "./Table.module.scss";
import DataSample from "../atoms/DataSample";
import ChevronIcon from "../atoms/ChevronIcon";

import { useSelector, useDispatch } from "react-redux";
import { sortData, setSort } from "../../redux/actions";

import { DataSampleInterface, TopState } from "../../interfaces";

export default function DataTable() {
	const { table, graph } = useSelector(({ data }: TopState) => data);
	const { sortBy } = useSelector(({ status }: TopState) => status);
	const dispatch = useDispatch();

	return (
		<ul className={styles.table}>
			<li style={{ display: "flex" }}>
				<div
					className={`${styles.tableHead} ${styles.leftTableCell}`}
					onClick={() => {
						if (sortBy === "stringASC") {
							dispatch(sortData("stringDESC"));
							dispatch(setSort("stringDESC"));
						} else {
							dispatch(sortData("stringASC"));
							dispatch(setSort("stringASC"));
						}
					}}
					data-name="metric-sort"
				>
					Metric
					<ChevronIcon sorted={sortBy} type="string" />
				</div>
				<div
					className={`${styles.tableHead} ${styles.rightTableCell}`}
					onClick={() => {
						if (sortBy === "numberASC") {
							dispatch(sortData("numberDESC"));
							dispatch(setSort("numberDESC"));
						} else {
							dispatch(sortData("numberASC"));
							dispatch(setSort("numberASC"));
						}
					}}
					data-name="value-sort"
				>
					Value
					<ChevronIcon sorted={sortBy} type="number" />
				</div>
			</li>
			{table.map((sample: DataSampleInterface, index: number) => (
				<DataSample
					sample={sample}
					index={index}
					// array.some is O(log n) whereas map/filter are O(n)
					selected={graph.some(
						(data: DataSampleInterface) => data.name === sample.name
					)}
				/>
			))}
		</ul>
	);
}

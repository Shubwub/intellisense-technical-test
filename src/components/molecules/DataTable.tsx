import React from "react";
import styles from "./Table.module.scss";
import DataSample from "../atoms/DataSample";
import ChevronIcon from "../atoms/ChevronIcon";

import { useSelector, useDispatch } from "react-redux";
import { sortData, setSort } from "../../redux/actions";

export default function DataTable() {
	const { table, graph } = useSelector((state: any) => state.data);
	const { sortBy } = useSelector((state: any) => state.status);
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
			{table.map((sample: any, index: any) => (
				<DataSample
					sample={sample}
					index={index}
					// array.some is O(log n) whereas map/filter are O(n)
					selected={graph.some((data: any) => data.name === sample.name)}
				/>
			))}
		</ul>
	);
}

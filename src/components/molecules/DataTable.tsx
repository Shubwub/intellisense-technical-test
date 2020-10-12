import React from "react";
import styles from "./Table.module.scss";
import DataSample from "../atoms/DataSample";
import ChevronIcon from "../atoms/ChevronIcon";

import { useSelector, useDispatch } from "react-redux";
import { sortData, setSort } from "../../redux/actions";

import { DataSampleInterface, TopState } from "../../interfaces";

/**
 *  This is the component for displaying the table. Data for the table is
 *  fetched by the API and normalised to a particular object structure.
 * 
 *  This component also has reference to graph data so it can inform samples
 *  if they are present in the data. It was felt this was a more efficient use
 *  of state than having each sample have knowledge of all graph data.
 * 
 *  Clicking the sorting headers calls 2 dispatches. The first actually sorts
 *  the data in state so it is rendered in a different order. The second
 *  sets the "sortBy" property to keep track of how the data is currently
 *  sorted.
 */
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
          key={index}
					// array.some is O(log n) whereas map/filter are O(n)
					selected={graph.some(
						(data: DataSampleInterface) => data.name === sample.name
					)}
				/>
			))}
		</ul>
	);
}

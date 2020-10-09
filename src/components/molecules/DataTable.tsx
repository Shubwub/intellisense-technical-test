import React from "react";
import styles from "./Table.module.scss";

export default function DataTable({ data }: { data: any[] }) {
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
				<li className={styles.tableRow} key={index}>
					<div
						className={`${styles.tableData} ${styles.leftTableCell} ${styles.leftData}`}
					>
						{sample.name}
					</div>
					<div className={`${styles.tableData} ${styles.rightTableCell}`}>
						{sample.values[sample.values.length - 1]}
					</div>
				</li>
			))}
		</ul>
	);
}

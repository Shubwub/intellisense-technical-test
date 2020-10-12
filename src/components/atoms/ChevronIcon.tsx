import React from "react";

import chevron from "../../assets/images/chevron.svg";
import chevronStroke from "../../assets/images/chevronStroke.svg";

import styles from "./Chevron.module.scss";

/**
 *  @param {string} sorted - The way the list is *currently* sorted. Can be
 *                           either: "stringASC", "stringDESC", "numberASC",
 *                           "numberDESC".
 *  @param {string} type - Which column the table is being sorted by, can be
 *                         either "string" (metric) or "number" (value).
 *
 *  This component decides the orientation of the chevron icon. If the table
 *  is not sorted then both chevrons will be outlines. If a particular column
 *  is sorted then that chevron will be filled and facing either up or down
 *  depending on if thhe column is sorted ASC or DESC.
 */
export default function ChevronIcon({
	sorted,
	type,
}: {
	sorted: string;
	type: string;
}) {
	if (type === "string") {
		if (sorted === "stringDESC") {
			return <img className={styles.chevron} src={chevron} alt="chevron" />;
		} else if (sorted === "stringASC") {
			return (
				<img
					className={`${styles.chevron} ${styles.inverted}`}
					src={chevron}
					alt="chevron"
				/>
			);
		}
		return <img className={styles.chevron} src={chevronStroke} alt="chevron" />;
	} else {
		if (sorted === "numberDESC") {
			return <img className={styles.chevron} src={chevron} alt="chevron" />;
		} else if (sorted === "numberASC") {
			return (
				<img
					className={`${styles.chevron} ${styles.inverted}`}
					src={chevron}
					alt="chevron"
				/>
			);
		}
		return <img className={styles.chevron} src={chevronStroke} alt="chevron" />;
	}
}

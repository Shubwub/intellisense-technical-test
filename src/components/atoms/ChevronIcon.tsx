import React from "react";

import chevron from "../../assets/images/chevron.svg";
import chevronStroke from "../../assets/images/chevronStroke.svg";

import styles from './Chevron.module.scss';

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

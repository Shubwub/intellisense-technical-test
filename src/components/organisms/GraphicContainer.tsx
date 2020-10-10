import React, { useState, useEffect } from "react";
import { DataTable, DataGraph } from "../molecules";

import styles from "./GraphicContainer.module.scss";

export default function GraphicContainer({
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
	return (
		<main className={styles.infographic}>
			{data.length && (
				<>
					<DataTable
						data={data}
						setData={setData}
						graphData={graphData}
						setGraphData={setGraphData}
					/>
					<DataGraph data={graphData} setGraphData={setGraphData} />
				</>
			)}
		</main>
	);
}

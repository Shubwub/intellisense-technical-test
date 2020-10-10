import React, { useState, useEffect } from "react";
import { DataSampleInterface } from "../../interfaces";
import { getData } from "../../services/api";
import { DataTable, DataGraph } from "../molecules";

import styles from "./GraphicContainer.module.scss";

export default function GraphicContainer() {
	const [data, setData] = useState<DataSampleInterface[]>([]);
	const [graphData, setGraphData] = useState<DataSampleInterface[]>([]);

	const fetchData = async () => {
		const data = await getData();
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className={styles.infographic}>
			{data.length && (
				<>
					<DataTable data={data} graphData={graphData} setGraphData={setGraphData}/>
					<DataGraph data={graphData} />
				</>
			)}
		</main>
	);
}

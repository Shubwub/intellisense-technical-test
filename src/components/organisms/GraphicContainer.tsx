import React, { useState, useEffect } from "react";
import { DataSampleInterface } from "../../interfaces";
import { getData } from "../../services/api";
import DataTable from "../molecules/DataTable";

export default function GraphicContainer() {
	const [data, setData] = useState<DataSampleInterface[]>([]);

	const fetchData = async () => {
		const data = await getData();
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<DataTable data={data} />
		</>
	);
}

import React, { useState, useEffect } from "react";
import { DataSampleInterface } from "../../interfaces";
import { getData } from "../../services/api";

export default function GraphicContainer() {
	const [data, setData] = useState<DataSampleInterface[]>([]);

	const fetchData = async () => {
		const data = await getData();
		setData(data);
	};

	useEffect(() => {
		fetchData();
  }, []);
  
  console.log(data)

	return <div>sample text</div>;
}

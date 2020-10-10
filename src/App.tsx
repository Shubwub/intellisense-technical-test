import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

import "./App.css";
import errorIcon from "./assets/images/error.svg";

import { GraphicContainer } from "./components/organisms";
import { DataSampleInterface } from "./interfaces";
import { getData } from "./services/api";

function App() {
	const [data, setData] = useState<DataSampleInterface[]>([]);
	const [graphData, setGraphData] = useState<DataSampleInterface[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	const fetchData = async () => {
		try {
			const data = await getData();
			setData([...data, ...data]);
			setLoading(false);
		} catch (e) {
			setLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const graphicRouter = () => {
		if (error) {
			return (
				<img
					src={errorIcon}
					className="error"
					alt="Error collecting data. Please try again."
				/>
			);
		} else if (loading) {
			return <PuffLoader size={150} color={"#68e0d8"} loading={loading} />;
		}
		return (
			<GraphicContainer
				data={data}
				setData={setData}
				graphData={graphData}
				setGraphData={setGraphData}
			/>
		);
	};

	return <div className="App">{graphicRouter()}</div>;
}

export default App;

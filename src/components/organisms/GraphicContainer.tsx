import React, { useEffect } from "react";
import { DataTable, DataGraph } from "../molecules";
import { PuffLoader } from "react-spinners";

import errorIcon from "../../assets/images/error.svg";

import { getData } from "../../services/api";
import {
	getData as dispatchData,
	setLoading,
	setError,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

import styles from "./GraphicContainer.module.scss";

import { TopState } from "../../interfaces";

export default function GraphicContainer() {
	const { error, loading } = useSelector(({ status }: TopState) => status);

	const dispatch = useDispatch();

	const fetchData = async () => {
		try {
			dispatch(setLoading(true));
			const data = await getData();
			dispatch(dispatchData(data));
			dispatch(setLoading(false));
		} catch (e) {
			dispatch(setLoading(false));
			dispatch(setError(true));
		}
	};

	useEffect(() => {
		fetchData();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const graphicRouter = () => {
		if (error) {
			return (
				<img
					src={errorIcon}
					className="error"
					alt="Error collecting data. Please try again."
					data-name="error"
				/>
			);
		} else if (loading) {
			return <PuffLoader size={150} color={"#68e0d8"} loading={loading} />;
		}
		return (
			<main className={styles.infographic}>
				<DataTable />
				<DataGraph />
			</main>
		);
	};

	return graphicRouter();
}

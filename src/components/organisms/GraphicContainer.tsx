import React, { useEffect } from "react";
import { DataTable, DataGraph } from "../molecules";
import { PuffLoader } from "react-spinners";

import errorIcon from "../../assets/images/error.svg";

import { getData } from "../../services/api";
import { setData, setLoading, setError } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

import styles from "./GraphicContainer.module.scss";

import { TopState } from "../../interfaces";

/**
 *  This is essentially the top-level component (aside form App) for the app.
 *  This component acts as a logical wrapper to the table and graph
 *  components.
 *
 *  Upon render, this component will attempt to fetch the data from the API.
 *  Whilst this is happening a loading state will be in place - loading a
 *  spinner. After the request has resolved, if it throws an error - an error
 *  component will be shown, otherwise it will render the table and graph.
 */
export default function GraphicContainer() {
	const { error, loading } = useSelector(({ status }: TopState) => status);

	const dispatch = useDispatch();

	const fetchData = async () => {
		try {
			dispatch(setLoading(true));
			const data = await getData();
			dispatch(setData(data));
			dispatch(setLoading(false));
		} catch (e) {
			dispatch(setLoading(false));
			dispatch(setError(true));
		}
	};

	/**
	 *  Attempt to fetch data from API on mount
	 */
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const graphicRouter = () => {
		if (error) {
			return (
				<main role="main">
					<img
						src={errorIcon}
						className="error"
						alt="Error collecting data. Please try again."
						data-name="error"
					/>
				</main>
			);
		} else if (loading) {
			return (
				<main role="main">
					<PuffLoader size={150} color={"#824FDF"} loading={loading} />
				</main>
			);
		}
		return (
			<main className={styles.infographic} role="main">
				<DataTable />
				<DataGraph />
			</main>
		);
	};

	return graphicRouter();
}

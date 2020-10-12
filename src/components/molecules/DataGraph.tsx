import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import emptyGraph from "../../assets/images/emptyGraph.svg";

import { useSelector, useDispatch } from "react-redux";
import { setGraph } from "../../redux/actions";

import styles from "./Graph.module.scss";

import { DataSampleInterface, TopState } from "../../interfaces";

/**
 *  This is the component for displaying the graph. Highcharts
 *  (https://www.highcharts.com/) is currently used due to
 *  it's familiarity and ease of setup.
 *
 *  The data used for the graph should be a subset of all
 *  available data.
 */
export default function DataGraph() {
	const { graph } = useSelector(({ data }: TopState) => data);

	const dispatch = useDispatch();

	/* These options are conditional as if there is no graph data
	 * it won't be able to access the times property and throw an
	 * error.
	 */
	const options: Highcharts.Options = graph.length
		? {
				title: {
					text: "",
				},
				legend: {
					enabled: false,
				},
				yAxis: {},
				xAxis: {
					tickPositions: graph[0].times,
					title: {
						text: "time",
					},
					labels: {
						step: 1,
					},
				},
				credits: {
					enabled: false,
				},
				series: graph.map((sample: DataSampleInterface) => {
					/* The data is mapped like this to tie data to it's
					 * equivelant time entry.
					 */
					return {
						type: "line",
						data: sample.times.map((time: number, index: number) => {
							return [time, sample.values[index]];
						}),
						name: sample.name,
					};
				}),
		  }
		: {};

	return (
		<div className={styles.graph}>
			{graph.length ? (
				<>
					<button
						className={styles.clearGraph}
						onClick={() => dispatch(setGraph([]))}
						data-name="clearGraph"
						id="clear-graph"
						tabIndex={0}
					>
						clear graph
					</button>
					<HighchartsReact
						containerProps={{ style: { width: "100%", height: "100%" } }}
						highcharts={Highcharts}
						options={options}
					/>
				</>
			) : (
				<img
					src={emptyGraph}
					className={styles.emptyGraph}
					alt="graph empty, select items to populate graph."
					data-name="emptyGraph"
				/>
			)}
		</div>
	);
}

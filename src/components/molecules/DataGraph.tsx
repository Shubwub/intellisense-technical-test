import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import emptyGraph from "../../assets/images/emptyGraph.svg";

import { useSelector, useDispatch } from "react-redux";
import { setGraph } from "../../redux/actions";

import styles from "./Graph.module.scss";

import { DataSampleInterface, TopState } from "../../interfaces";

export default function DataGraph() {
	const { graph } = useSelector(({ data }: TopState) => data);

	const dispatch = useDispatch();

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

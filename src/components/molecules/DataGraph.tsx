import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import styles from "./Graph.module.scss";

export default function DataGraph({ data }: { data: any }) {
	const options: Highcharts.Options = data.length
		? {
				title: {
					text: "",
				},
				legend: {
					enabled: false,
				},
				yAxis: {},
				xAxis: {
					tickPositions: data[0].times,
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
				series: data.map((sample: any) => {
					return {
						type: "line",
						data: sample.times.map((time: any, index: number) => {
							return [time, sample.values[index]];
						}),
						name: sample.name,
					};
				}),
		  }
		: {};

	return (
		<div className={styles.graph}>
			{data.length ? (
				<HighchartsReact highcharts={Highcharts} options={options} />
			) : (
				<p>no data</p>
			)}
		</div>
	);
}

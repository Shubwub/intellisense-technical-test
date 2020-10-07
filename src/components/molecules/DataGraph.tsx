import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function DataGraph({ data }: { data: any }) {
	const options: Highcharts.Options = {
		title: {
			text: "",
		},
		yAxis: {},
		xAxis: {
			title: {
				text: "time",
			},
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
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
}

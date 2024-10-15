// ./components/Charts/Charts.js
import React from 'react';
import Chart from 'react-apexcharts';

const Charts = ({ data }) => {
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: data.categories,
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={data.series}
        type="line"
        width="500"
      />
    </div>
  );
};

export default Charts;

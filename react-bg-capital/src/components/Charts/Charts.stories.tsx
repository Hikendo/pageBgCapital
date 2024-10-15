// Charts.stories.tsx
import React from 'react';
import Charts from './Charts';

export default {
  title: 'Charts',
};

const chartData = {
  categories: ['January', 'February', 'March', 'April', 'May'],
  series: [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49],
    },
  ],
};

export const Default = () => <Charts data={chartData} />;

Default.story = {
  name: 'default',
};

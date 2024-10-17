// Charts.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Charts from './Charts';

describe('<Charts />', () => {
  test('it should mount', () => {
    const chartData = {
      categories: ['January', 'February', 'March', 'April', 'May'],
      series: [
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49],
        },
      ],
    };

    render(<Charts data={chartData} />);

    const chartsComponent = screen.getByTestId('Charts');
    expect(chartsComponent).toBeInTheDocument();
  });
});

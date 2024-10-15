// LazyCharts.tsx
import React, { lazy, Suspense } from 'react';

const LazyCharts = lazy(() => import('./Charts'));

const Charts = (props: JSX.IntrinsicAttributes & { data: any }) => (
  <Suspense fallback={null}>
    <LazyCharts {...props} />
  </Suspense>
);

export default Charts;

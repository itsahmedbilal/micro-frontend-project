import React, { lazy, Suspense } from 'react';

const App1 = lazy(() => import('app1/App'));
const App2 = lazy(() => import('app2/App'));

const App = () => (
  <div>
    <h1>Micro-frontend Container</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <App1 />
      <App2 />
    </Suspense>
  </div>
);

export default App;
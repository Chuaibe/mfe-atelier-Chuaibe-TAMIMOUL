import React from 'react';
import ReactDOM from 'react-dom';

const RemoteHeader = React.lazy(() => import('header/Header'));

const App = () => (
  <React.Suspense fallback={<div>Chargement...</div>}>
    <RemoteHeader />
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));

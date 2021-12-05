import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ReactSummary from './ReactSummary';
import NodeSummary from './NodeSummary';
import ReactInstallTutorial from './ReactInstallTutorial';
import NodeInstallTutorial from './NodeInstallTutorial';
import Guide from './Guide';
import Demo from './Demo';
import Conclusion from './Conclusion';
import Credits from './Credits';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-summary' element={<ReactSummary />} />
        <Route path='/node-summary' element={<NodeSummary />} />
        <Route path='/react-install-tutorial' element={<ReactInstallTutorial />}/>
        <Route path='/node-install-tutorial' element={<NodeInstallTutorial />}/>
        <Route path='/Guide' element={<Guide />}/>
        <Route path='/demo-page' element={<Demo />}/>
        <Route path='/conclusion' element={<Conclusion />} />
        <Route path='/credits' element={<Credits />} />
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;

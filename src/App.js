import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayNumber from './components/DisplayNumber';
import DisplayWord from './components/DisplayWord';
import DisplayWordWithColors from './components/DisplayWordWithColors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:value" element={<DisplayNumber />} />
        <Route path="/word/:word" element={<DisplayWord />} exact />
        <Route path="/word/:word/:color/:bgColor" element={<DisplayWordWithColors />} />
      </Routes>
    </Router>
  );
}

export default App;



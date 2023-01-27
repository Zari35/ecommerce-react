import React  from 'react';
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;

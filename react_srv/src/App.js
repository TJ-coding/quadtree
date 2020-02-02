import React from 'react';
import Image from './Image.js';
import './App.css';


const api = 'http://35.238.117.10';


class App extends React.Component {
  render() {
    return <div>
      <Image url={api + '/test/portrait.jpg'} />
      <Image url={api + '/test/p2.jpg'} />
      <Image url={api + '/test/p3.jpg'} />
      <Image url={api + '/test/ocean.jpg'} />
      <Image url={api + '/test/lagoon.jpg'} />
      <Image url={api + '/test/portrait.jpg'} />

    </div>;
  }
}

export default App;

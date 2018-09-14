import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const stories = [
  {
    title: 'Framer X - Interactive Design for Everyone',
    url: 'https://framer.com/x/',
    author: 'Framer',
    num_comments: 13,
    points: 7,
    objectID: 0,
  },
  {
    title: 'Sketch - The digital design toolkit',
    url: 'https://www.sketchapp.com/',
    author: 'Bohemian Coding',
    num_comments: 19,
    points: 6,
    objectID: 1,
  },
];

ReactDOM.render(<App stories={stories} />, document.getElementById('root'));
registerServiceWorker();

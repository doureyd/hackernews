const INITIAL_STATE = [
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

function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default storyReducer;

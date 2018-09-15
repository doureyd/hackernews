import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';

const INITIAL_STATE = {
  stories: [],
  error: null,
};

const applyFetchErrorStories = (state, action) => ({
  stories: [],
  error: action.error,
});

const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null,
});

function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_FETCH_ERROR:
      return applyFetchErrorStories(state, action);
    case STORIES_ADD:
      return applyAddStories(state, action);
    default:
      return state;
  }
}

export default storyReducer;

import {
  STORIES_FETCH,
  STORIES_ADD,
  STORIES_FETCH_ERROR,
} from '../constants/actionTypes';

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
});

export { doFetchStories, doAddStories, doFetchErrorStories };
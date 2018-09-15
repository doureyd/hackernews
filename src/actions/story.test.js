import { doAddStories, doFetchStories, doFetchErrorStories } from './story';
import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
} from '../constants/actionTypes';

describe('storyActions', () => {
  it('adds stories to an action object', () => {
    const stories = ['a', 'b'];

    const expectedAction = {
      type: STORIES_ADD,
      stories,
    };

    const action = doAddStories(stories);

    expect(action).toEqual(expectedAction);
  });
  it('fetchs stories to an action object', () => {
    const query = 'react';

    const expectedAction = {
      type: STORIES_FETCH,
      query,
    };

    const action = doFetchStories(query);

    expect(action).toEqual(expectedAction);
  });
  it('fetchs stories error to an action object', () => {
    const error = 'No result found';

    const expectedAction = {
      type: STORIES_FETCH_ERROR,
      error,
    };

    const action = doFetchErrorStories(error);

    expect(action).toEqual(expectedAction);
  });
});

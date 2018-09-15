import deepFreeze from 'deep-freeze';
import archiveReducer from './archive';
import { STORY_ARCHIVE } from '../constants/actionTypes';

describe('storyReducer', () => {
  it('add archived story to the next state', () => {
    const id = 7;

    const action = {
      type: STORY_ARCHIVE,
      id,
    };

    const previousState = [];
    const expectedState = [7];

    deepFreeze(previousState);

    const newState = archiveReducer(previousState, action);

    expect(newState).toEqual(expectedState);
  });
});

import { doArchiveStory } from './archive';
import { STORY_ARCHIVE } from '../constants/actionTypes';

describe('storyActions', () => {
  it('archives a story to an action object', () => {
    const storyId = 0;

    const expectedAction = {
      type: STORY_ARCHIVE,
      id: 0,
    };

    const action = doArchiveStory(0);

    expect(action).toEqual(expectedAction);
  });
});

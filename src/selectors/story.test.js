import { getReadableStories, getFetchError } from './story';

describe('storySelector', () => {
  it('retreives readable stories from state', () => {
    const storyState = {
      stories: [
        {
          objectID: 0,
          title: 'foo',
        },
        {
          objectID: 1,
          title: 'bar',
        },
      ],
      error: null,
    };

    const archiveState = [0];

    const state = { storyState, archiveState };

    const expectedReadableStories = [
      {
        objectID: 1,
        title: 'bar',
      },
    ];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);
  });
  it('retreives error from state', () => {
    const storyState = {
      stories: [],
      error: 'Not result found',
    };

    const expectedFetchedError = 'Not result found';
    const fetchedError = getFetchError({ storyState });

    expect(fetchedError).toEqual(expectedFetchedError);
  });
});

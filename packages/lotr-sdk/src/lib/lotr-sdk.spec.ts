import { TheOneSdk } from './lotr-sdk';

describe('theOneSdk', () => {
  it('should throw an error when no access key is provided ', () => {
    try {
      new TheOneSdk('');
    } catch (e) {
      expect(e).toEqual('No access token provided.');
    }
  });
});

import fetch, { Response } from 'node-fetch';
import { theOneSdk } from './lotr-sdk';
import { API_BASE_URL } from './constants';

jest.mock('node-fetch');

const API_KEY = process.env['ONE_ACCESS_TOKEN'] ?? '';
const MOVIE_ID = '5cd95395de30eff6ebccde5b';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ docs: [] }),
  }),
) as jest.Mock;


const makeRequest = async () => {
  const res = await fetch(API_BASE_URL);
  return await res.json();
};

describe('theOneSdk', () => {
  const mockFetch = fetch as jest.MockedFunction<typeof fetch>;
  const sdk = new theOneSdk(API_KEY);

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch movies', async () => {
    const json = jest.fn() as jest.MockedFunction<any>;
    json.mockResolvedValue({ status: 200 });

    const mockResponse = { ok: true, json } as Response;
    mockFetch.mockResolvedValue(mockResponse);

    await makeRequest();

    expect(json.mock.calls.length).toBe(1);
    expect(fetch).toHaveBeenCalledWith(
      `${API_BASE_URL}/movies`,
    );
  });
});

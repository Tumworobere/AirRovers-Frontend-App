import '@testing-library/jest-dom/extend-expect';
import fetchData from '../__mocks__/https';
import fetchPlanesData from './fetchPlanesTesting';

describe('fetchPlanesData', () => {
  it('should return an array of planes', async () => {
    const planes = await fetchPlanesData();
    expect(planes).toEqual([
      {
        id: 1,
        name: 'Lighter-than-air',
        capacity: 2,
        range: '1,000 miles',
        url: 'https://www.jetblue.com/',
        speed: '1,500 mph',
        city: 'New York',
        images: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Me_262_flight_show_at_ILA_2006_%28cropped%29.jpg',
        price: '8687',
        reservation_expiration_date: null,
        created_at: '2022-05-06T04:25:43.904Z',
        updated_at: '2022-05-06T04:25:43.904Z',
      },
      {
        id: 2,
        name: 'AH-64 Apache helicopter',
        capacity: 2,
        range: '1,000 miles',
        url: 'https://www.jetblue.com/',
        speed: '1,500 mph',
        city: 'New York',
        images: 'https://cdn.britannica.com/20/27120-050-53824E0C/attack-AH-64-Apache-reconnaissance-helicopter-prototype-form-1975.jpg',
        price: '26429',
        reservation_expiration_date: null,
        created_at: '2022-05-06T04:25:44.010Z',
        updated_at: '2022-05-06T04:25:44.010Z',
      },
    ]);
  });

  it('test fetching plane name from the array', async () => {
    const planes = await fetchPlanesData();
    expect(planes[0].name).toEqual('Lighter-than-air');
  });
}
);
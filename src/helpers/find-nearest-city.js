import { CITIES } from '../data/cities';

/**
 * Check whether the click on the map is a close to a city.
 * A click is close to a city where the nearest city in both longitude and latitude is the same city.
 * @param {*} latClicked
 * @param {*} longClicked
 */
export const findNearestCity = (latClicked, longClicked) => {
  let minLongDiff = Number.POSITIVE_INFINITY;
  let minLatDiff = Number.POSITIVE_INFINITY;
  let cityLong, cityLat;

  for (let i = 0; i < CITIES.length; i++) {
    const { city, longitude, latitude } = CITIES[i];
    const longClickedDiff = Math.abs(longClicked - longitude);
    const latClickedDiff = Math.abs(latClicked - latitude);

    if (longClickedDiff < minLongDiff) {
      minLongDiff = longClickedDiff;
      cityLong = city;
    }

    if (latClickedDiff < minLatDiff) {
      minLatDiff = latClickedDiff;
      cityLat = city;
    }
  }

  return cityLong === cityLat ? cityLat : '';
};

/* export const CITIES = [
  {
    city: 'Port Macquarie',
    latitude: -31.4307,
    longitude: 152.90633,
  },
  {
    city: 'Taree',
    latitude: -31.911209,
    longitude: 152.46022,
  },
  {
    city: 'Newcastle',
    latitude: -32.926432,
    longitude: 151.783644,
  },
  {
    city: 'Lake Macquarie',
    latitude: -32.960328,
    longitude: 151.623532,
  },
  {
    city: 'Tuggerah',
    latitude: -33.30721,
    longitude: 151.415618,
  },
  {
    city: 'Gosford',
    latitude: -33.42695,
    longitude: 151.340871,
  },
  {
    city: 'Epping',
    latitude: -33.772771,
    longitude: 151.081349,
  },
  {
    city: 'Sydney',
    latitude: -33.87364,
    longitude: 151.206913,
  },
  {
    city: 'Parkes',
    latitude: -33.137897,
    longitude: 148.17485,
  },
  {
    city: 'Orange',
    latitude: -33.2833,
    longitude: 149.1,
  },
  {
    city: 'Bathurst',
    latitude: -33.4193,
    longitude: 149.5775,
  },
  {
    city: 'Lithgow',
    latitude: -33.4827,
    longitude: 150.157,
  },
  {
    city: 'Katoomba',
    latitude: -33.7125,
    longitude: 150.3119,
  },
  {
    city: 'Sutherland',
    latitude: -34.0333,
    longitude: 151.05,
  },
  {
    city: 'Campbelltown',
    latitude: -34.064999,
    longitude: 150.814163,
  },
  {
    city: 'Wollongong',
    latitude: -34.424179,
    longitude: 150.890555,
  },
  {
    city: 'Dapto',
    latitude: -34.49337,
    longitude: 150.79474,
  },
  {
    city: 'Shellharbour',
    latitude: -34.57912,
    longitude: 150.86775,
  },
  {
    city: 'Kiama',
    latitude: -34.67028,
    longitude: 150.841446,
  },
  {
    city: 'Bomdaberry',
    latitude: -34.89259,
    longitude: 150.58268,
  },
  {
    city: 'Mittagong',
    latitude: -34.45053,
    longitude: 150.447991,
  },
  {
    city: 'Goulburn',
    latitude: -34.75155,
    longitude: 149.72086,
  },
  {
    city: 'Canberra',
    latitude: -35.282001,
    longitude: 149.128998,
  },
]; */

export const CITIES = {
  Sydney: {
    coordinates: [151.206913, -33.87364],
    routes: [
      'northern-route',
      'western-route',
      'southern-inland-route',
      'southern-route',
    ],
  },
  'Port Macquarie': {
    coordinates: [152.90633, -31.4307],
    routes: ['northern-route'],
    icon: 'https://img.icons8.com/officel/16/000000/delete-link.png',
  },
  Taree: {
    coordinates: [152.46022, -31.911209],
    routes: ['northern-route'],
  },
  Newcastle: {
    coordinates: [151.783644, -32.926432],
    routes: ['northern-route'],
  },
  'Lake Macquarie': {
    coordinates: [151.623532, -32.960328],
    routes: ['northern-route'],
  },
  Tuggerah: {
    coordinates: [151.415618, -33.30721],
    routes: ['northern-route'],
  },
  Gosford: {
    coordinates: [151.340871, -33.42695],
    routes: ['northern-route'],
  },
  Epping: {
    coordinates: [151.081349, -33.772771],
    routes: ['northern-route'],
  },
  Parkes: {
    coordinates: [148.17485, -33.137897],
    routes: ['western-route'],
  },
  Orange: {
    coordinates: [149.1, -33.2833],
    routes: ['western-route'],
  },
  Bathurst: {
    coordinates: [149.5775, -33.4193],
    routes: ['western-route'],
  },
  Lithgow: { coordinates: [150.157, -33.4827], routes: ['western-route'] },
  Katoomba: { coordinates: [150.3119, -33.7125], routes: ['western-route'] },
  Canberra: {
    coordinates: [149.128998, -35.282001],
    routes: ['southern-inland-route'],
  },
  Goulburn: {
    coordinates: [149.72086, -34.75155],
    routes: ['southern-inland-route'],
  },
  Mittagong: {
    coordinates: [150.447991, -34.45053],
    routes: ['southern-inland-route'],
  },
  Campbelltown: {
    coordinates: [150.814163, -34.064999],
    routes: ['southern-inland-route'],
  },
  Bomdaberry: {
    coordinates: [150.58268, -34.89259],
    routes: ['southern-route'],
  },
  Kiama: {
    coordinates: [150.841446, -34.67028],
    routes: ['southern-route'],
  },
  Shellharbour: {
    coordinates: [150.86775, -34.57912],
    routes: ['southern-route'],
  },
  Dapto: {
    coordinates: [150.79474, -34.49337],
    routes: ['southern-route'],
  },
  Wollongong: {
    coordinates: [150.890555, -34.424179],
    routes: ['southern-route'],
  },
  Sutherland: {
    coordinates: [151.05, -34.0333],
    routes: ['southern-route'],
  },
};

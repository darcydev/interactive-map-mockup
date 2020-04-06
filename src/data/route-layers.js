export const northernStations = [
  'Port Macquarie',
  'Taree',
  'Lake Macquarie',
  'Gosford',
  'Epping',
];
export const centralWestStations = [
  'Parkes',
  'Orange',
  'Bathurst',
  'Lithgow',
  'Katoomba',
];
export const southernWestStations = [
  'Canberra',
  'Goulburn',
  'Mittagong',
  'Campbelltown',
];
export const southernStations = [
  'Bomdaberry',
  'Kiama',
  'Shellharbour',
  'Dapto',
  'Wollongong',
  'Sunderland',
];

export const allRoutes = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: [
      [152.90633, -31.4307],
      [152.46022, -31.911209],
      [151.780014, -32.92667],
      [151.623532, -32.960328],
      [151.419618, -33.30721],
      [151.341871, -33.42695],
      [151.081349, -33.772771],
      [151.206913, -33.87364],
    ],
  },
  {
    name: 'central-west-route',
    color: [244, 128, 35],
    path: [
      [148.17485, -33.137897],
      [149.1, -33.2833],
      [149.5775, -33.4193],
      [150.157, -33.4827],
      [150.3119, -33.7125],
      [151.206913, -33.87364],
    ],
  },
  {
    name: 'southern-west-route',
    color: [50, 168, 82],
    path: [
      [149.128998, -35.282001], // canberra
      [149.72086, -34.75155],
      [150.447991, -34.45053],
      [150.814163, -34.064999],
      [151.206913, -33.87364], // sydney
    ],
  },
  {
    name: 'southern-route',
    color: [211, 11, 0],
    path: [
      [150.58268, -34.89259],
      [150.854446, -34.67028],
      [150.86775, -34.57912],
      [150.79474, -34.49337],
      [150.893555, -34.424179],
      [151.05, -34.0333],
      [151.206913, -33.87364], // sydney
    ],
  },
];

export const northernRoute = [allRoutes[0]];
export const centralWestRoute = [allRoutes[1]];
export const southernWestRoute = [allRoutes[2]];
export const southernRoute = [allRoutes[3]];

//
export const PortMacquarie_Taree = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 2),
  },
];

export const PortMacquarie_Newcastle = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 3),
  },
];

export const PortMacquarie_LakeMacquarie = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 4),
  },
];

export const PortMacquarie_Tuggerah = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 5),
  },
];

export const PortMacquarie_Gosford = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 6),
  },
];

export const PortMacquarie_Epping = [
  {
    name: 'northern-route',
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 7),
  },
];

export const Taree_Newcastle = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 3),
  },
];

export const Taree_LakeMacquarie = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 4),
  },
];

export const Taree_Tuggerah = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 5),
  },
];

export const Taree_Gosford = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 6),
  },
];

export const Taree_Epping = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 7),
  },
];

export const Taree_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(1, 8),
  },
];

export const Newcastle_LakeMacquarie = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(2, 4),
  },
];

export const Newcastle_Tuggerah = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(2, 5),
  },
];

export const Newcastle_Gosford = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(2, 6),
  },
];

export const Newcastle_Epping = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(2, 7),
  },
];

export const Newcastle_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(2, 8),
  },
];

export const LakeMacquarie_Tuggerah = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(3, 5),
  },
];

export const LakeMacquarie_Gosford = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(3, 6),
  },
];

export const LakeMacquarie_Epping = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(3, 7),
  },
];

export const LakeMacquarie_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(3, 8),
  },
];

export const Tuggerah_Gosford = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(4, 6),
  },
];

export const Tuggerah_Epping = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(4, 7),
  },
];

export const Tuggerah_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(4, 8),
  },
];

export const Gosford_Epping = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(5, 7),
  },
];

export const Gosford_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(5, 8),
  },
];

export const Epping_Sydney = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(6, 8),
  },
];

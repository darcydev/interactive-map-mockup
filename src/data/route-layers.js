import { CITIES } from './cities';

export const northernStations = [
  'Port Macquarie',
  'Taree',
  'Newcastle',
  'Lake Macquarie',
  'Tuggerah',
  'Gosford',
  'Epping',
  'Sydney',
];
export const centralWestStations = [
  'Parkes',
  'Orange',
  'Bathurst',
  'Lithgow',
  'Katoomba',
  'Sydney',
];
export const southernWestStations = [
  'Canberra',
  'Goulburn',
  'Mittagong',
  'Campbelltown',
  'Sydney',
];
export const southernStations = [
  'Bomdaberry',
  'Kiama',
  'Shellharbour',
  'Dapto',
  'Wollongong',
  'Sutherland',
  'Sydney',
];

export const allRoutes = [
  {
    color: [101, 147, 245],
    path: [
      CITIES['Port Macquarie'].coordinates,
      CITIES.Taree.coordinates,
      CITIES.Newcastle.coordinates,
      CITIES['Lake Macquarie'].coordinates,
      CITIES.Tuggerah.coordinates,
      CITIES.Gosford.coordinates,
      CITIES.Epping.coordinates,
      CITIES.Sydney.coordinates,
    ],
  },
  {
    color: [244, 128, 35],
    path: [
      CITIES.Parkes.coordinates,
      CITIES.Orange.coordinates,
      CITIES.Bathurst.coordinates,
      CITIES.Lithgow.coordinates,
      CITIES.Katoomba.coordinates,
      CITIES.Sydney.coordinates,
    ],
  },
  {
    color: [50, 168, 82],
    path: [
      CITIES.Canberra.coordinates,
      CITIES.Goulburn.coordinates,
      CITIES.Mittagong.coordinates,
      CITIES.Campbelltown.coordinates,
      CITIES.Sydney.coordinates,
    ],
  },
  {
    color: [211, 11, 0],
    path: [
      CITIES.Bomdaberry.coordinates,
      CITIES.Kiama.coordinates,
      CITIES.Shellharbour.coordinates,
      CITIES.Dapto.coordinates,
      CITIES.Wollongong.coordinates,
      CITIES.Sutherland.coordinates,
      CITIES.Sydney.coordinates,
    ],
  },
];

export const northernRoute = [allRoutes[0]];
export const centralWestRoute = [allRoutes[1]];
export const southernWestRoute = [allRoutes[2]];
export const southernRoute = [allRoutes[3]];

export const PortMacquarie_Taree = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 2),
  },
];

export const PortMacquarie_Newcastle = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 3),
  },
];

export const PortMacquarie_LakeMacquarie = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 4),
  },
];

export const PortMacquarie_Tuggerah = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 5),
  },
];

export const PortMacquarie_Gosford = [
  {
    color: [101, 147, 245],
    path: northernRoute[0].path.slice(0, 6),
  },
];

export const PortMacquarie_Epping = [
  {
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

export const Parkes_Orange = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(0, 2),
  },
];

export const Parkes_Bathurst = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(0, 3),
  },
];

export const Parkes_Lithgow = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(0, 4),
  },
];

export const Parkes_Katoomba = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(0, 5),
  },
];

export const Orange_Bathurst = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(1, 3),
  },
];

export const Orange_Lithgow = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(1, 4),
  },
];

export const Orange_Katoomba = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(1, 5),
  },
];

export const Orange_Sydney = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(1, 6),
  },
];

export const Bathurst_Lithgow = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(2, 4),
  },
];

export const Bathurst_Katoomba = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(2, 5),
  },
];

export const Bathurst_Sydney = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(2, 6),
  },
];

export const Lithgow_Katoomba = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(3, 5),
  },
];

export const Lithgow_Sydney = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(3, 6),
  },
];

export const Katoomba_Sydney = [
  {
    color: [244, 128, 35],
    path: centralWestRoute[0].path.slice(4, 6),
  },
];

export const Canberra_Goulburn = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(0, 2),
  },
];

export const Canberra_Mittagong = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(0, 3),
  },
];

export const Canberra_Campbelltown = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(0, 4),
  },
];

export const Goulburn_Mittagong = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(1, 3),
  },
];

export const Goulburn_Campbelltown = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(1, 4),
  },
];

export const Goulburn_Sydney = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(1, 5),
  },
];

export const Mittagong_Campbelltown = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(2, 4),
  },
];

export const Mittagong_Sydney = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(2, 5),
  },
];

export const Campbelltown_Sydney = [
  {
    color: [50, 168, 82],
    path: southernWestRoute[0].path.slice(3, 5),
  },
];

export const Bomdaberry_Kiama = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(0, 2),
  },
];

export const Bomdaberry_Shellharbour = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(0, 3),
  },
];

export const Bomdaberry_Dapto = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(0, 4),
  },
];

export const Bomdaberry_Wollongong = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(0, 5),
  },
];

export const Bomdaberry_Sutherland = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(0, 6),
  },
];

export const Kiama_Shellharbour = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(1, 3),
  },
];

export const Kiama_Dapto = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(1, 4),
  },
];

export const Kiama_Wollongong = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(1, 5),
  },
];

export const Kiama_Sutherland = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(1, 6),
  },
];

export const Kiama_Sydney = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(1, 7),
  },
];

export const Shellharbour_Dapto = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(2, 4),
  },
];

export const Shellharbour_Wollongong = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(2, 5),
  },
];

export const Shellharbour_Sutherland = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(2, 6),
  },
];

export const Shellharbour_Sydney = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(2, 7),
  },
];

export const Dapto_Wollongong = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(3, 5),
  },
];

export const Dapto_Sutherland = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(3, 6),
  },
];

export const Dapto_Sydney = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(3, 7),
  },
];

export const Wollongong_Sutherland = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(4, 6),
  },
];

export const Wollongong_Sydney = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(4, 7),
  },
];

export const Sutherland_Sydney = [
  {
    color: [211, 11, 0],
    path: southernRoute[0].path.slice(5, 7),
  },
];

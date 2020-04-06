const Sydney_PortMacquarie = [6, 2.5];
const Sydney_Taree = [5.5, 2.3];
const Sydney_Newcastle = [3.2, 1.3];
const Sydney_LakeMacquarie = [3, 1.1];
const Sydney_Tuggerah = [2.6, 0.5];
const Sydney_Gosford = [1.5, 0.3];
const Sydney_Epping = [0.4, 0.1];
const Sydney_Sutherland = [0.2, 0.05];
const Sydney_Campbelltown = [0.3, 0.1];
const Sydney_Wollongong = [1.5, 0.3];
const Sydney_Dapto = [1.6, 0.4];
const Sydney_Shellharbour = [2, 1];
const Sydney_Kiama = [2.2, 1.1];
const Sydney_Bombdaberry = [3.1, 1.5];
const Sydney_Mittagong = [1.1, 0.35];
const Sydney_Goulburn = [2.2, 1];
const Sydney_Canberra = [3.5, 1.2];
const PortMacquarie_Taree = [0.4, 0.1];
const PortMacquarie_Newcastle = [1.1, 0.3];
const PortMacquarie_LakeMacquarie = [1.6, 0.45];
const PortMacquarie_Tuggerah = [3.1, 1.1];
const PortMacquarie_Gosford = [3.3, 1.65];
const PortMacquarie_Epping = [4.5, 2];
const Taree_Newcastle = [1.5, 0.3];
const Taree_LakeMacquarie = [2.1, 0.5];
const Taree_Tuggerah = [2.4, 1.3];
const Taree_Gosford = [3.1, 1.5];
const Taree_Epping = [4, 2.1];
const Sutherland_Campbelltown = [0.3, 0.1];
const Sutherland_Wollongong = [1, 0.3];
const Sutherland_Dapto = [1.3, 0.4];
const Sutherland_Shellharbour = [2, 1];
const Sutherland_Kiama = [2.1, 1.1];
const Sutherland_Bomdaberry = [3, 1.4];
const Campbelltown_Wollongong = [0.5, 0.2];
const Campbelltown_Dapto = [1, 0.3];
const Campbelltown_Shellharbour = [1.2, 0.5];
const Campbelltown_Kiama = [1.5, 1.2];
const Campbelltown_Bomdaberry = [2.4, 1.5];
const Campbelltown_Mittagong = [0.5, 0.2];
const Campbelltown_Goulburn = [1.4, 0.5];
const Campbelltown_Canberra = [3.1, 1.1];
const Wollongong_Dapto = [0.2, 0.1];
const Wollongong_Shellharbour = [0.3, 0.15];
const Wollongong_Kiama = [0.4, 0.2];
const Wollongong_Bomdaberry = [1.1, 0.35];
const Dapto_Shellharbour = [0.2, 0.1];
const Dapto_Kiama = [0.3, 0.15];
const Dapto_Bomdaberry = [0.5, 0.25];
const Shellharbour_Kiama = [0.3, 0.15];
const Shellharbour_Bomdaberry = [0.35, 0.2];
const Kiama_Bomdaberry = [0.25, 0.15];
const Mittagong_Goulburn = [0.5, 0.35];
const Mittagong_Canberra = [1.3, 0.5];
const Goulburn_Canberra = [0.4, 0.25];

export const journeyTimes = {
  'Port Macquarie': {
    Taree: PortMacquarie_Taree,
    Newcastle: PortMacquarie_Newcastle,
    'Lake Macquarie': PortMacquarie_LakeMacquarie,
    Tuggerah: PortMacquarie_Tuggerah,
    Gosford: PortMacquarie_Gosford,
    Epping: PortMacquarie_Epping,
    Sydney: Sydney_PortMacquarie,
  },
  Taree: {
    'Port Macquarie': PortMacquarie_Taree,
    Newcastle: Taree_Newcastle,
    'Lake Macquarie': Taree_LakeMacquarie,
    Tuggerah: Taree_Tuggerah,
    Gosford: Taree_Gosford,
    Epping: Taree_Epping,
    Sydney: Sydney_Taree,
  },
  Newcastle: {
    'Port Macquarie': PortMacquarie_Newcastle,
    Taree: Taree_Newcastle,
    'Lake Macquarie': [2.5, 1.3],
    Tuggerah: [2.5, 1.1],
    Gosford: [2.3, 0.65],
    Epping: [1.5, 0.4],
    Sydney: Sydney_Newcastle,
  },
  'Lake Macquarie': {
    'Port Macquarie': PortMacquarie_LakeMacquarie,
    Taree: Taree_LakeMacquarie,
    Newcastle: [2.5, 1.3],
    Tuggerah: [2.5, 1.1],
    Gosford: [2.3, 0.55],
    Epping: [1.5, 0.4],
    Sydney: Sydney_LakeMacquarie,
  },
  Tuggerah: {
    'Port Macquarie': PortMacquarie_Tuggerah,
    Taree: Taree_Tuggerah,
    Newcastle: [2.5, 1.3],
    'Lake Macquarie': [2.5, 0.5],
    Gosford: [2.3, 0.55],
    Epping: [1.5, 0.4],
    Sydney: Sydney_Tuggerah,
  },
  Gosford: {
    'Port Macquarie': PortMacquarie_Gosford,
    Taree: Taree_Gosford,
    Newcastle: [2.5, 1.3],
    'Lake Macquarie': [2.5, 0.5],
    Tuggerah: [2.3, 0.55],
    Epping: [1.5, 0.4],
    Sydney: Sydney_Gosford,
  },
  Epping: {
    'Port Macquarie': PortMacquarie_Epping,
    Taree: Taree_Epping,
    Newcastle: [2.5, 1.3],
    'Lake Macquarie': [2.5, 0.5],
    Tuggerah: [2.3, 0.55],
    Gosford: [1.5, 0.4],
    Sydney: Sydney_Epping,
  },
  Sydney: {
    'Port Macquarie': Sydney_PortMacquarie,
    Taree: Sydney_Taree,
    Newcastle: Sydney_Newcastle,
    'Lake Macquarie': Sydney_LakeMacquarie,
    Tuggerah: Sydney_Tuggerah,
    Gosford: Sydney_Gosford,
    Epping: Sydney_Epping,
    Parkes: [5, 2.3],
    Orange: [4.3, 1.6],
    Bathurst: [3.1, 1.1],
    Lithgow: [2.3, 0.6],
    Katoomba: [1.3, 0.2],
    Sutherland: Sydney_Sutherland,
    Campbelltown: Sydney_Campbelltown,
    Wollongong: Sydney_Wollongong,
    Dapto: Sydney_Dapto,
    Shellharbour: Sydney_Shellharbour,
    Kiama: Sydney_Kiama,
    Bomdaberry: Sydney_Bombdaberry,
    Mittagong: Sydney_Mittagong,
    Goulburn: Sydney_Goulburn,
    Canberra: Sydney_Canberra,
  },
  Parkes: {
    Orange: [1.2, 0.2],
    Bathurst: [2.8, 0.8],
    Lithgow: [3.5, 1.5],
    Katoomba: [4.3, 1.1],
    Sydney: [5, 2.3],
  },
  Orange: {
    Parkes: [1.2, 0.2],
    Bathurst: [1.1, 0.4],
    Lithgow: [2.5, 1.1],
    Katoomba: [1.8, 1.0],
    Sydney: [4.3, 1.6],
  },
  Bathurst: {
    Parkes: [2.5, 0.5],
    Orange: [1.1, 0.4],
    Lithgow: [1.3, 0.5],
    Katoomba: [1.9, 1.0],
    Sydney: [3.1, 1.1],
  },
  Lithgow: {
    Parkes: [3.5, 1.5],
    Orange: [2.5, 1.1],
    Bathurst: [1.3, 0.5],
    Katoomba: [0.7, 0.2],
    Sydney: [3.1, 1.1],
  },
  Katoomba: {
    Parkes: [4.3, 1.1],
    Orange: [1.8, 0.8],
    Bathurst: [1.9, 0.8],
    Ligthow: [0.7, 0.2],
    Sydney: [1.3, 0.2],
  },
  Sutherland: {
    Sydney: Sydney_Sutherland,
    Campbelltown: Sutherland_Campbelltown,
    Wollongong: Sutherland_Wollongong,
    Dapto: Sutherland_Dapto,
    Shellharbour: Sutherland_Shellharbour,
    Kiama: Sutherland_Kiama,
    Bomdaberry: Sutherland_Bomdaberry,
  },
  Campbelltown: {
    Sydney: Sydney_Campbelltown,
    Sutherland: Sutherland_Campbelltown,
    Wollongong: Campbelltown_Wollongong,
    Dapto: Campbelltown_Dapto,
    Shellharbour: Campbelltown_Shellharbour,
    Kiama: Campbelltown_Kiama,
    Bomdaberry: Campbelltown_Bomdaberry,
    Mittagong: Campbelltown_Mittagong,
    Goulburn: Campbelltown_Goulburn,
    Canberra: Campbelltown_Canberra,
  },
  Wollongong: {
    Sydney: Sydney_Wollongong,
    Sutherland: Sutherland_Wollongong,
    Campbelltown: Campbelltown_Wollongong,
    Dapto: Wollongong_Dapto,
    Shellharbour: Wollongong_Shellharbour,
    Kiama: Wollongong_Kiama,
    Bomdaberry: Wollongong_Bomdaberry,
  },
  Dapto: {
    Sydney: Sydney_Dapto,
    Sutherland: Sutherland_Dapto,
    Campbelltown: Campbelltown_Dapto,
    Wollongong: Wollongong_Dapto,
    Shellharbour: Dapto_Shellharbour,
    Kiama: Dapto_Kiama,
    Bomdaberry: Dapto_Bomdaberry,
  },
  Shellharbour: {
    Sydney: Sydney_Shellharbour,
    Sutherland: Sutherland_Shellharbour,
    Campbelltown: Campbelltown_Shellharbour,
    Wollongong: Wollongong_Shellharbour,
    Dapto: Dapto_Shellharbour,
    Kiama: Shellharbour_Kiama,
    Bomdaberry: Shellharbour_Bomdaberry,
  },
  Kiama: {
    Sydney: Sydney_Kiama,
    Sutherland: Sutherland_Kiama,
    Campbelltown: Campbelltown_Kiama,
    Wollongong: Wollongong_Kiama,
    Dapto: Dapto_Kiama,
    Shellharbour: Shellharbour_Kiama,
    Bomdaberry: Kiama_Bomdaberry,
  },
  Bomdaberry: {
    Sydney: Sydney_Bombdaberry,
    Sutherland: Sutherland_Bomdaberry,
    Campbelltown: Campbelltown_Bomdaberry,
    Wollongong: Wollongong_Bomdaberry,
    Dapto: Dapto_Bomdaberry,
    Shellharbour: Shellharbour_Bomdaberry,
    Kiama: Kiama_Bomdaberry,
  },
  Mittagong: {
    Sydney: Sydney_Mittagong,
    Campbelltown: Campbelltown_Mittagong,
    Goulburn: Mittagong_Goulburn,
    Canberra: Mittagong_Canberra,
  },
  Goulburn: {
    Sydney: Sydney_Goulburn,
    Campbelltown: Campbelltown_Goulburn,
    Mittagong: Mittagong_Goulburn,
    Canberra: Goulburn_Canberra,
  },
  Canberra: {
    Sydney: Sydney_Canberra,
    Campbelltown: Campbelltown_Canberra,
    Mittagong: Mittagong_Canberra,
    Goulburn: Goulburn_Canberra,
  },
  /*   Melbourne: {
    Sydney: {
      beforeTime: 3.5,
      afterTime: 1.2,
      route: ['big-south-route'],
    },
  }, */
};

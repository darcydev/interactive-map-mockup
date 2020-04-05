const Sydney_PortMacquarie = [6, 2.5];
const Sydney_Taree = [5.5, 2.3];
const Sydney_Newcastle = [3.2, 1.3];
const Sydney_LakeMacquarie = [3, 1.1];
const Sydney_Tuggerah = [2.6, 0.5];
const Sydney_Gosford = [1.5, 0.3];
const Sydney_Epping = [0.4, 0.1];
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
};

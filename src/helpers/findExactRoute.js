import {
  northernRoute,
  westernRoute,
  southernInlandRoute,
  southernRoute,
  PortMacquarie_Taree,
  PortMacquarie_Newcastle,
  PortMacquarie_LakeMacquarie,
  PortMacquarie_Tuggerah,
  PortMacquarie_Gosford,
  PortMacquarie_Epping,
  Taree_Newcastle,
  Taree_LakeMacquarie,
  Taree_Tuggerah,
  Taree_Gosford,
  Taree_Epping,
  Taree_Sydney,
  Newcastle_LakeMacquarie,
  Newcastle_Tuggerah,
  Newcastle_Gosford,
  Newcastle_Epping,
  Newcastle_Sydney,
  LakeMacquarie_Tuggerah,
  LakeMacquarie_Gosford,
  LakeMacquarie_Epping,
  LakeMacquarie_Sydney,
  Tuggerah_Gosford,
  Tuggerah_Epping,
  Tuggerah_Sydney,
  Gosford_Epping,
  Gosford_Sydney,
  Epping_Sydney,
  Parkes_Orange,
  Parkes_Bathurst,
  Parkes_Lithgow,
  Parkes_Katoomba,
  Orange_Bathurst,
  Orange_Lithgow,
  Orange_Katoomba,
  Orange_Sydney,
  Bathurst_Lithgow,
  Bathurst_Katoomba,
  Bathurst_Sydney,
  Lithgow_Katoomba,
  Lithgow_Sydney,
  Katoomba_Sydney,
  Canberra_Goulburn,
  Canberra_Mittagong,
  Canberra_Campbelltown,
  Goulburn_Mittagong,
  Goulburn_Campbelltown,
  Goulburn_Sydney,
  Mittagong_Campbelltown,
  Mittagong_Sydney,
  Campbelltown_Sydney,
  Bomdaberry_Kiama,
  Bomdaberry_Shellharbour,
  Bomdaberry_Dapto,
  Bomdaberry_Wollongong,
  Bomdaberry_Sutherland,
  Kiama_Shellharbour,
  Kiama_Dapto,
  Kiama_Wollongong,
  Kiama_Sutherland,
  Kiama_Sydney,
  Shellharbour_Dapto,
  Shellharbour_Wollongong,
  Shellharbour_Sutherland,
  Shellharbour_Sydney,
  Dapto_Wollongong,
  Dapto_Sutherland,
  Dapto_Sydney,
  Wollongong_Sutherland,
  Wollongong_Sydney,
  Sutherland_Sydney,
} from '../data/route-layers';

export default function findExactRoute(fromLocation, toLocation) {
  if (fromLocation === 'Port Macquarie') {
    if (toLocation === 'Taree') return PortMacquarie_Taree;
    else if (toLocation === 'Newcastle') return PortMacquarie_Newcastle;
    else if (toLocation === 'Lake Macquarie')
      return PortMacquarie_LakeMacquarie;
    else if (toLocation === 'Tuggerah') return PortMacquarie_Tuggerah;
    else if (toLocation === 'Gosford') return PortMacquarie_Gosford;
    else if (toLocation === 'Epping') return PortMacquarie_Epping;
    else if (toLocation === 'Sydney') return northernRoute;
  } else if (fromLocation === 'Taree') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_Taree;
    else if (toLocation === 'Newcastle') return Taree_Newcastle;
    else if (toLocation === 'Lake Macquarie') return Taree_LakeMacquarie;
    else if (toLocation === 'Tuggerah') return Taree_Tuggerah;
    else if (toLocation === 'Gosford') return Taree_Gosford;
    else if (toLocation === 'Epping') return Taree_Epping;
    else if (toLocation === 'Sydney') return Taree_Sydney;
  } else if (fromLocation === 'Newcastle') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_Newcastle;
    else if (toLocation === 'Taree') return Taree_Newcastle;
    else if (toLocation === 'Lake Macquarie') return Newcastle_LakeMacquarie;
    else if (toLocation === 'Tuggerah') return Newcastle_Tuggerah;
    else if (toLocation === 'Gosford') return Newcastle_Gosford;
    else if (toLocation === 'Epping') return Newcastle_Epping;
    else if (toLocation === 'Sydney') return Newcastle_Sydney;
  } else if (fromLocation === 'Lake Macquarie') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_LakeMacquarie;
    else if (toLocation === 'Taree') return Taree_LakeMacquarie;
    else if (toLocation === 'Newcastle') return Newcastle_LakeMacquarie;
    else if (toLocation === 'Tuggerah') return LakeMacquarie_Tuggerah;
    else if (toLocation === 'Gosford') return LakeMacquarie_Gosford;
    else if (toLocation === 'Epping') return LakeMacquarie_Epping;
    else if (toLocation === 'Sydney') return LakeMacquarie_Sydney;
  } else if (fromLocation === 'Tuggerah') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_Tuggerah;
    else if (toLocation === 'Taree') return Taree_Tuggerah;
    else if (toLocation === 'Newcastle') return Newcastle_Tuggerah;
    else if (toLocation === 'Lake Macquarie') return LakeMacquarie_Tuggerah;
    else if (toLocation === 'Gosford') return Tuggerah_Gosford;
    else if (toLocation === 'Epping') return Tuggerah_Epping;
    else if (toLocation === 'Sydney') return Tuggerah_Sydney;
  } else if (fromLocation === 'Gosford') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_Gosford;
    else if (toLocation === 'Taree') return Taree_Gosford;
    else if (toLocation === 'Newcastle') return Newcastle_Gosford;
    else if (toLocation === 'Lake Macquarie') return LakeMacquarie_Gosford;
    else if (toLocation === 'Tuggerah') return Tuggerah_Gosford;
    else if (toLocation === 'Epping') return Gosford_Epping;
    else if (toLocation === 'Sydney') return Gosford_Sydney;
  } else if (fromLocation === 'Epping') {
    if (toLocation === 'Port Macquarie') return PortMacquarie_Epping;
    else if (toLocation === 'Taree') return Taree_Epping;
    else if (toLocation === 'Newcastle') return Newcastle_Epping;
    else if (toLocation === 'Lake Macquarie') return LakeMacquarie_Epping;
    else if (toLocation === 'Gosford') return Gosford_Epping;
    else if (toLocation === 'Tuggerah') return Tuggerah_Epping;
    else if (toLocation === 'Sydney') return Epping_Sydney;
  } else if (fromLocation === 'Sydney') {
    if (toLocation === 'Port Macquarie') return northernRoute;
    else if (toLocation === 'Taree') return Taree_Sydney;
    else if (toLocation === 'Newcastle') return Newcastle_Sydney;
    else if (toLocation === 'Lake Macquarie') return LakeMacquarie_Sydney;
    else if (toLocation === 'Gosford') return Gosford_Sydney;
    else if (toLocation === 'Epping') return Epping_Sydney;
    else if (toLocation === 'Tuggerah') return Tuggerah_Sydney;
  } else if (fromLocation === 'Parkes') {
    if (toLocation === 'Orange') return Parkes_Orange;
    else if (toLocation === 'Bathurst') return Parkes_Bathurst;
    else if (toLocation === 'Lithgow') return Parkes_Lithgow;
    else if (toLocation === 'Katoomba') return Parkes_Katoomba;
    else if (toLocation === 'Sydney') return westernRoute;
  } else if (fromLocation === 'Orange') {
    if (toLocation === 'Parkes') return Parkes_Orange;
    else if (toLocation === 'Bathurst') return Orange_Bathurst;
    else if (toLocation === 'Lithgow') return Orange_Lithgow;
    else if (toLocation === 'Katoomba') return Orange_Katoomba;
    else if (toLocation === 'Sydney') return Orange_Sydney;
  } else if (fromLocation === 'Bathurst') {
    if (toLocation === 'Parkes') return Parkes_Bathurst;
    else if (toLocation === 'Orange') return Orange_Bathurst;
    else if (toLocation === 'Lithgow') return Bathurst_Lithgow;
    else if (toLocation === 'Katoomba') return Bathurst_Katoomba;
    else if (toLocation === 'Sydney') return Bathurst_Sydney;
  } else if (fromLocation === 'Lithgow') {
    if (toLocation === 'Orange') return Orange_Lithgow;
    else if (toLocation === 'Bathurst') return Bathurst_Lithgow;
    else if (toLocation === 'Parkes') return Parkes_Lithgow;
    else if (toLocation === 'Katoomba') return Lithgow_Katoomba;
    else if (toLocation === 'Sydney') return Lithgow_Sydney;
  } else if (fromLocation === 'Katoomba') {
    if (toLocation === 'Orange') return Orange_Katoomba;
    else if (toLocation === 'Bathurst') return Parkes_Katoomba;
    else if (toLocation === 'Lithgow') return Lithgow_Katoomba;
    else if (toLocation === 'Bathurst') return Bathurst_Katoomba;
    else if (toLocation === 'Sydney') return Katoomba_Sydney;
  } else if (fromLocation === 'Canberra') {
    if (toLocation === 'Goulburn') return Canberra_Goulburn;
    else if (toLocation === 'Mittagong') return Canberra_Mittagong;
    else if (toLocation === 'Campbelltown') return Canberra_Campbelltown;
    else if (toLocation === 'Sydney') return southernInlandRoute;
  } else if (fromLocation === 'Goulburn') {
    if (toLocation === 'Canberra') return Canberra_Goulburn;
    else if (toLocation === 'Mittagong') return Goulburn_Mittagong;
    else if (toLocation === 'Campbelltown') return Goulburn_Campbelltown;
    else if (toLocation === 'Sydney') return Goulburn_Sydney;
  } else if (fromLocation === 'Mittagong') {
    if (toLocation === 'Canberra') return Canberra_Mittagong;
    else if (toLocation === 'Goulburn') return Goulburn_Mittagong;
    else if (toLocation === 'Campbelltown') return Mittagong_Campbelltown;
    else if (toLocation === 'Sydney') return Mittagong_Sydney;
  } else if (fromLocation === 'Campbelltown') {
    if (toLocation === 'Canberra') return Canberra_Campbelltown;
    else if (toLocation === 'Mittagong') return Mittagong_Campbelltown;
    else if (toLocation === 'Goulburn') return Goulburn_Campbelltown;
    else if (toLocation === 'Sydney') return Campbelltown_Sydney;
  } else if (fromLocation === 'Bomdaberry') {
    if (toLocation === 'Kiama') return Bomdaberry_Kiama;
    else if (toLocation === 'Shellharbour') return Bomdaberry_Shellharbour;
    else if (toLocation === 'Dapto') return Bomdaberry_Dapto;
    else if (toLocation === 'Wollongong') return Bomdaberry_Wollongong;
    else if (toLocation === 'Sutherland') return Bomdaberry_Sutherland;
    else if (toLocation === 'Sydney') return southernRoute;
  } else if (fromLocation === 'Kiama') {
    if (toLocation === 'Bomdaberry') return Bomdaberry_Kiama;
    else if (toLocation === 'Shellharbour') return Kiama_Shellharbour;
    else if (toLocation === 'Dapto') return Kiama_Dapto;
    else if (toLocation === 'Wollongong') return Kiama_Wollongong;
    else if (toLocation === 'Sutherland') return Kiama_Sutherland;
    else if (toLocation === 'Sydney') return Kiama_Sydney;
  } else if (fromLocation === 'Shellharbour') {
    if (toLocation === 'Bomdaberry') return Bomdaberry_Shellharbour;
    else if (toLocation === 'Kiama') return Kiama_Shellharbour;
    else if (toLocation === 'Dapto') return Shellharbour_Dapto;
    else if (toLocation === 'Wollongong') return Shellharbour_Wollongong;
    else if (toLocation === 'Sutherland') return Shellharbour_Sutherland;
    else if (toLocation === 'Sydney') return Shellharbour_Sydney;
  } else if (fromLocation === 'Dapto') {
    if (toLocation === 'Bomdaberry') return Bomdaberry_Dapto;
    else if (toLocation === 'Shellharbour') return Shellharbour_Dapto;
    else if (toLocation === 'Kiama') return Kiama_Dapto;
    else if (toLocation === 'Wollongong') return Dapto_Wollongong;
    else if (toLocation === 'Sutherland') return Dapto_Sutherland;
    else if (toLocation === 'Sydney') return Dapto_Sydney;
  } else if (fromLocation === 'Wollongong') {
    if (toLocation === 'Bomdaberry') return Bomdaberry_Wollongong;
    else if (toLocation === 'Shellharbour') return Shellharbour_Wollongong;
    else if (toLocation === 'Dapto') return Dapto_Wollongong;
    else if (toLocation === 'Kiama') return Kiama_Wollongong;
    else if (toLocation === 'Sutherland') return Wollongong_Sutherland;
    else if (toLocation === 'Sydney') return Wollongong_Sydney;
  } else if (fromLocation === 'Sutherland') {
    if (toLocation === 'Bomdaberry') return Bomdaberry_Sutherland;
    else if (toLocation === 'Shellharbour') return Shellharbour_Sutherland;
    else if (toLocation === 'Dapto') return Dapto_Sutherland;
    else if (toLocation === 'Wollongong') return Wollongong_Sutherland;
    else if (toLocation === 'Kiama') return Kiama_Sutherland;
    else if (toLocation === 'Sydney') return Sutherland_Sydney;
  }
}

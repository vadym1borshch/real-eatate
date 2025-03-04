import house1 from '/house1.png?url'
import house2 from '/house2.png?url'
import house3 from '/house3.png?url'
import house4 from '/house4.png?url'
import house5 from '/house5.png?url'
import house6 from '/house6.png?url'
import house7 from '/apt1.png?url'
import house8 from '/apt2.png?url'
import house9 from '/apt3.png?url'
import house10 from '/apt4.png?url'
import house11 from '/apt5.png?url'
import house12 from '/apt6.png?url'
import house13 from '/apt7.png?url'
import house14 from '/apt8.png?url'
import house15 from '/apt9.png?url'
import { RealEstate } from './index.ts'

export const houses: RealEstate[] = [
  {
    id: '10025',
    image: house1,
    label: 'EXKLUSIVE WOHNPROJEKTE IM ZENTRUM WIENS',
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value:'real-estate.type.apartment'
    },
    address: '3400 Klosterneuburg',
    rooms: 6,
    bathroom: 3,
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy'
    },
    m2: '215,96 m²',
    price: '650.000,00 €',
    views: 152,
  },
  {
    id: "10506",
    image: house3,
    label: "ERSTKLASSIGE WOHNUNGEN IN WIENER TOP-LAGE",
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1070 Mariahilfer Straße",
    rooms: 4,
    bathroom: 2,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "142,26 m²",
    price: "1.235.000,00 €",
    views: 139
  },
  {
    id: "10125",
    image: house2,
    label: "MODERNE APARTMENTS MIT PANORAMABLICK",
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1170 Hernalser Hauptstraße",
    rooms: 3,
    bathroom: 1,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "215,96 m²",
    price: "380.000,00 €",
    views: 98
  },
  {
    id: "100251",
    image: house4,
    label: "JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "house",
      value: "real-estate.type.house"
    },
    address: "3400 Klosterneuburg",
    rooms: 6,
    bathroom: 3,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "215,96 m²",
    price: "750.000,00 €",
    views: 171
  },
  {
    id: "100252",
    image: house7,
    label: "DACHGESCHOSSWOHNUNG MIT BALKON NAHE COTTAGE VIERTEL",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 4,
    bathroom: 1,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "98,51 m²",
    price: "606.000,00 €",
    views: 152
  },
  {
    id: "100253",
    image: house8,
    label: "MODERNE DG-MAISONETTE MIT BALKON AM AUMANNPLATZ",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 2,
    bathroom: 1,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "61,68 m²",
    price: "650.000,00 €",
    views: 152
  },
  {
    id: "100001",
    image: house9,
    label: "MODERNE DACHGESCHOSSWOHNUNG NÄHE AKH WIEN UND KUTSCHKERMARKT",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 4,
    bathroom: 1,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "111,20 m²",
    price: "690.000,00 €",
    views: 53
  },
  {
    id: "10004",
    image: house10,
    label: "GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 5,
    bathroom: 5,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "200,00 m²",
    price: "2.300.000,00 €",
    views: 49
  },
  {
    id: "10023",
    image: house5,
    label: "EXQUISITE VILLA MIT WELLNESSBEREICH UND INDOOR-POOL",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "house",
      value: "real-estate.type.house"
    },
    address: "3400 Klosterneuburg",
    rooms: 7,
    bathroom: 4,
    operation: {
      key: "buy",
      value: "real-estate.operations.buy"
    },
    m2: "460,07 m²",
    price: "2.900.000,00 €",
    views: 37
  },
  {
    id: "100255",
    image: house11,
    label: "EXKLUSIVES PENTHOUSE MIT BLICK AUF DEN STEPHANSDOM",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "house",
      value: "real-estate.type.house"
    },
    address: "3400 Klosterneuburg",
    rooms: 6,
    bathroom: 3,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "215,96 m²",
    price: "1.900,00 €",
    views: 152
  },
  {
    id: "100256",
    image: house6,
    label: "CHARMANTE ALTBAUWOHNUNG IM HERZEN WIENS",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 4,
    bathroom: 1,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "98,51 m²",
    price: "1.400,00 €",
    views: 114
  },
  {
    id: "100257",
    image: house12,
    label: "GROßZÜGIGES EINFAMILIENHAUS IN RUHIGER WOHNGEGEND",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 2,
    bathroom: 1,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "61,68 m²",
    price: "5.200,00 €",
    views: 89
  },
  {
    id: "100258",
    image: house15,
    label: "LUXURIÖSE VILLA MIT PRIVATGARTEN UND POOL",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 4,
    bathroom: 1,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "111,20 m²",
    price: "2.600,00 €",
    views: 78
  },
  {
    id: "100259",
    image: house14,
    label: "MODERNE LOFTWOHNUNG IN ZENTRALER LAGE",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "apartment",
      value: "real-estate.type.apartment"
    },
    address: "1180 Wien",
    rooms: 5,
    bathroom: 5,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "200,00 m²",
    price: "3.100,00 €",
    views: 152
  },
  {
    id: "100260",
    image: house13,
    label: "STILVOLLES STADTHAUS MIT DACHTERRASSE",
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: "house",
      value: "real-estate.type.house"
    },
    address: "3400 Klosterneuburg",
    rooms: 7,
    bathroom: 4,
    operation: {
      key: "rent",
      value: "real-estate.operations.rent"
    },
    m2: "460,07 m²",
    price: "1.600,00 €",
    views: 152
  }

]
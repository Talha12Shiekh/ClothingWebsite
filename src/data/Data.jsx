import lady1 from "../assets/1lady.png";
import lady2 from "../assets/2ndlady.png";
import lady3 from "../assets/3rdlady.png";
import lady4 from "../assets/4thlady.png";
import product1 from "../assets/prodcut1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import trend1 from "../assets/trend1.webp";
import trend2 from "../assets/trend2.webp";
import trend3 from "../assets/trend3.webp";
import trend4 from "../assets/trend4.webp";
import trend5 from "../assets/trend5.webp";
import trend6 from "../assets/trend6.webp";
import trend7 from "../assets/trend7.webp";
import trend8 from "../assets/trend8.webp";
import trend9 from "../assets/trend9.webp";

export const TRENDS = [
  {image:trend1,item:"DES-04 KARANDI EMBROIDERED SHAWL",price:"8,050",key:1},
  {image:trend2,item:"MWS-04 WINTER EMBROIDERED 3PC",price:"8,050",key:2},
  {image:trend3,item:"DES-03 KARANDI EMBROIDERED SHAWL",price:"7,350",key:3},
]


export const SELLERS = [
  {image:trend4,item:"MWS-03 WINTER EMBROIDERED 3PC",price:"7,110",key:1},
  {image:trend5,item:"MWS-01 WINTER EMBROIDERED 3PC",price:"6,300",key:2},
  {image:trend6,item:"MWS-09 WINTER EMBROIDERED 3PC",price:"6,250",key:3},
]

export const FEATURES = [
  {image:trend7,item:"MGW-10 COTTON SILK EMBROIDERED 3PCS UNSTICHED",price:"5,750",key:1},
  {image:trend8,item:"MWS-07 PEACH WOOL EMBROIDERED 3PC",price:"6,250",key:2},
  {image:trend9,item:"MWS-10 PECH WOOL EMBROIDERED 3PC",price:"6,250",key:3},
]


export const PRODUCTS = [
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 1,
    price: "4,999",
    image: product1,
    category:"Gull Ahmad"
  },
  {
    name: "Linen Kurti-Embroidered",
    key: 2,
    price: "3,799",
    image: product2,
    category:"Gull Ahmad"
  },
  {
    name: "Viscose Kurti-Embroidered",
    key: 3,
    price: "4,499",
    image: product3,
    category:"Sana Safinaz"
  },
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 4,
    price: "4,899",
    image: product4,
    category:"Gull Ahmad"
  },
  {
    name: "2 Piece Raw Silk Suit-Embroidered",
    key: 5,
    price: "5,199",
    image: product5,
    category:"Sana Safinaz"
  },
  {
    name: "Leather Coat",
    key: 6,
    price: "7,499",
    image: product6,
    category:"Maria"
  },
  {
    name: "3 Piece Organza Suit-Embroidered",
    key: 7,
    price: "22,999",
    image: product7,
    category:"Maria"
  },
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 8,
    price: "4,899",
    image: product8,
    category:"Stiched"
  },
];

export const ICON_COLOR = "#ca1515"

export const FACILITES = [
  {
    Image:() => <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill={ICON_COLOR} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 11l1.5-4.5h11L19 11z"></path></svg>,
    heading:"Free Shipping",
    description:"For all order over $99",
    key:1
  },
  {
    Image:() => <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256"><path fill={ICON_COLOR} d="M240 52H16A12 12 0 0 0 4 64v128a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-58.79 128H74.79A60.18 60.18 0 0 0 28 133.21v-10.42A60.18 60.18 0 0 0 74.79 76h106.42A60.18 60.18 0 0 0 228 122.79v10.42A60.18 60.18 0 0 0 181.21 180M228 97.94A36.23 36.23 0 0 1 206.06 76H228ZM49.94 76A36.23 36.23 0 0 1 28 97.94V76ZM28 158.06A36.23 36.23 0 0 1 49.94 180H28ZM206.06 180A36.23 36.23 0 0 1 228 158.06V180ZM128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></path></svg>,
    heading:"Money Guarantee",
    description:"If good have Problems",
    key:2
  },
  {
    Image:() => <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill={ICON_COLOR} d="m11.8 20.025l.15-4.225l3.05-3h1.95v1.85l2.275.35q.275-.7.438-1.45t.162-1.55q0-2.225-1.112-4.062T15.8 5.05V8h-3v3h-2v3H8.775L6.8 11h-1v1l-1.775 1.975q.65 2.6 2.813 4.325t4.962 1.725m4-6.025h-3v-2h3zm0-6h2.025l-1 3h-2.05zm-4 14q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T1.8 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T11.8 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T21.8 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T11.8 22"></path></svg>,
    heading:"Online Support 24/7",
    description:"Dedicated support",
    key:3
  },
  {
    Image:() => <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill={ICON_COLOR} d="M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5Q9.075 5 7.038 7.038T5 12v1h4z"></path></svg>,
    heading:"Payment Secure",
    description:"100% secure payment",
    key:4
  },
]

export const BALLS_DATA = [
  {key:1,icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="black"
      d="M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L4 18.59V15a1 1 0 0 0-2 0v6a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54A1 1 0 0 0 3 22h6a1 1 0 0 0 0-2H5.41L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"
    ></path>
  </svg>},
  {key:2,icon: <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="black"
      d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87m-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"
    ></path>
  </svg>
  },
  {key:3,icon:  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
  >
    <path
      fill="black"
      d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-4h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m2-6h-1.18A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.82 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-7 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h1a1 1 0 0 1 1 1Z"
    ></path>
  </svg>
  },
]

const SECOND_IMAGE_BACKGROUND= "#bee2d6";
const THIRD_IMAGE_BACKGROUND= "#d6d4f0";
const FOURTH_IMAGE_BACKGROUND= "#fedbe5";
const FIFTH_IMAGE_BACKGROUND= "#cee2f5";

export const LIST_ITEMS = [
    "Home","Products","Trends","Contacts"
]

export const CARD_ITEMS_ARRAY = [
    {heading:"Gull Ahmad",text:"358 items",image:lady1,backgroundColor:SECOND_IMAGE_BACKGROUND},
    {heading:"Sana Safinaz",text:"273 items",image:lady2,backgroundColor:THIRD_IMAGE_BACKGROUND},
    {heading:"Maria",text:"159 items",image:lady3,backgroundColor:FOURTH_IMAGE_BACKGROUND},
    {heading:"Stiched",text:"792 items",image:lady4,backgroundColor:FIFTH_IMAGE_BACKGROUND},
  ]

export const FILTER_ITEMS = [
    { text: "All", key: 1 },
    { text: "Gull Ahmad", key: 2 },
    { text: "Sana Safinaz", key: 3 },
    { text: "Maria", key: 4 },
    { text: "Stiched", key: 5 },
  ];
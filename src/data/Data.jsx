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
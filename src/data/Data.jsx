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
  {
    image: trend1,
    item: "DES-04 KARANDI EMBROIDERED SHAWL",
    price: "8,050",
    key: 1,
  },
  {
    image: trend2,
    item: "MWS-04 WINTER EMBROIDERED 3PC",
    price: "8,050",
    key: 2,
  },
  {
    image: trend3,
    item: "DES-03 KARANDI EMBROIDERED SHAWL",
    price: "7,350",
    key: 3,
  },
];

export const SELLERS = [
  {
    image: trend4,
    item: "MWS-03 WINTER EMBROIDERED 3PC",
    price: "7,110",
    key: 1,
  },
  {
    image: trend5,
    item: "MWS-01 WINTER EMBROIDERED 3PC",
    price: "6,300",
    key: 2,
  },
  {
    image: trend6,
    item: "MWS-09 WINTER EMBROIDERED 3PC",
    price: "6,250",
    key: 3,
  },
];

export const FEATURES = [
  {
    image: trend7,
    item: "MGW-10 COTTON SILK EMBROIDERED 3PCS UNSTICHED",
    price: "5,750",
    key: 1,
  },
  {
    image: trend8,
    item: "MWS-07 PEACH WOOL EMBROIDERED 3PC",
    price: "6,250",
    key: 2,
  },
  {
    image: trend9,
    item: "MWS-10 PECH WOOL EMBROIDERED 3PC",
    price: "6,250",
    key: 3,
  },
];

export const PRODUCTS = [
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 1,
    price: "4,999",
    image: product1,
    category: "Gull Ahmad",
  },
  {
    name: "Linen Kurti-Embroidered",
    key: 2,
    price: "3,799",
    image: product2,
    category: "Gull Ahmad",
  },
  {
    name: "Viscose Kurti-Embroidered",
    key: 3,
    price: "4,499",
    image: product3,
    category: "Sana Safinaz",
  },
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 4,
    price: "4,899",
    image: product4,
    category: "Gull Ahmad",
  },
  {
    name: "2 Piece Raw Silk Suit-Embroidered",
    key: 5,
    price: "5,199",
    image: product5,
    category: "Sana Safinaz",
  },
  {
    name: "Leather Coat",
    key: 6,
    price: "7,499",
    image: product6,
    category: "Maria",
  },
  {
    name: "3 Piece Organza Suit-Embroidered",
    key: 7,
    price: "22,999",
    image: product7,
    category: "Maria",
  },
  {
    name: "3 Piece Khaddar Suit-Embroidered",
    key: 8,
    price: "4,899",
    image: product8,
    category: "Stiched",
  },
];

export const ICON_COLOR = "#ca1515";

export const FACILITES = [
  {
    Image: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill={ICON_COLOR}
          d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16m11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M5 11l1.5-4.5h11L19 11z"
        ></path>
      </svg>
    ),
    heading: "Free Shipping",
    description: "For all order over $99",
    key: 1,
  },
  {
    Image: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 256 256"
      >
        <path
          fill={ICON_COLOR}
          d="M240 52H16A12 12 0 0 0 4 64v128a12 12 0 0 0 12 12h224a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m-58.79 128H74.79A60.18 60.18 0 0 0 28 133.21v-10.42A60.18 60.18 0 0 0 74.79 76h106.42A60.18 60.18 0 0 0 228 122.79v10.42A60.18 60.18 0 0 0 181.21 180M228 97.94A36.23 36.23 0 0 1 206.06 76H228ZM49.94 76A36.23 36.23 0 0 1 28 97.94V76ZM28 158.06A36.23 36.23 0 0 1 49.94 180H28ZM206.06 180A36.23 36.23 0 0 1 228 158.06V180ZM128 88a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 56a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
        ></path>
      </svg>
    ),
    heading: "Money Guarantee",
    description: "If good have Problems",
    key: 2,
  },
  {
    Image: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill={ICON_COLOR}
          d="m11.8 20.025l.15-4.225l3.05-3h1.95v1.85l2.275.35q.275-.7.438-1.45t.162-1.55q0-2.225-1.112-4.062T15.8 5.05V8h-3v3h-2v3H8.775L6.8 11h-1v1l-1.775 1.975q.65 2.6 2.813 4.325t4.962 1.725m4-6.025h-3v-2h3zm0-6h2.025l-1 3h-2.05zm-4 14q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T1.8 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T11.8 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T21.8 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T11.8 22"
        ></path>
      </svg>
    ),
    heading: "Online Support 24/7",
    description: "Dedicated support",
    key: 3,
  },
  {
    Image: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 24 24"
      >
        <path
          fill={ICON_COLOR}
          d="M9 21H5q-.825 0-1.412-.587T3 19v-7q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 3q1.875 0 3.513.713t2.85 1.924q1.212 1.213 1.925 2.85T21 12v7q0 .825-.587 1.413T19 21h-4v-8h4v-1q0-2.925-2.037-4.962T12 5Q9.075 5 7.038 7.038T5 12v1h4z"
        ></path>
      </svg>
    ),
    heading: "Payment Secure",
    description: "100% secure payment",
    key: 4,
  },
];

export const PORTFOLIO_IMAGES = [
  trend1,
  product1,
  trend2,
  product2,
  trend3,
  product3,
];

export const SOCIAL_ICONS = [
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
      fill="currentColor"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9M207 353.89v-196.5l145 98.2Z"
    ></path>
  </svg>,
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"
    ></path>
    <path
      fill="currentColor"
      d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"
    ></path>
  </svg>,
];

export const BALLS_DATA = [
  {
    key: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L4 18.59V15a1 1 0 0 0-2 0v6a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54A1 1 0 0 0 3 22h6a1 1 0 0 0 0-2H5.41L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38"
        ></path>
      </svg>
    ),
  },
  {
    key: 2,
    icon: (
      <svg
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
    ),
  },
  {
    key: 3,
    icon: (
      <svg
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
    ),
  },
];

const SECOND_IMAGE_BACKGROUND = "#bee2d6";
const THIRD_IMAGE_BACKGROUND = "#d6d4f0";
const FOURTH_IMAGE_BACKGROUND = "#fedbe5";
const FIFTH_IMAGE_BACKGROUND = "#cee2f5";

export const LIST_ITEMS = [
  { item: "Home", key: 1,path:"/" },
  { item: "Products",key:2,path:"/Products" },
  { item: "Trends",key:3,path:"/Trends" },
  { item: "Contacts",key:4,path:"/Contacts" },
];

export const CARD_ITEMS_ARRAY = [
  {
    heading: "Gull Ahmad",
    text: "358 items",
    image: lady1,
    backgroundColor: SECOND_IMAGE_BACKGROUND,
  },
  {
    heading: "Sana Safinaz",
    text: "273 items",
    image: lady2,
    backgroundColor: THIRD_IMAGE_BACKGROUND,
  },
  {
    heading: "Maria",
    text: "159 items",
    image: lady3,
    backgroundColor: FOURTH_IMAGE_BACKGROUND,
  },
  {
    heading: "Stiched",
    text: "792 items",
    image: lady4,
    backgroundColor: FIFTH_IMAGE_BACKGROUND,
  },
];

export const FILTER_ITEMS = [
  { text: "All", key: 1 },
  { text: "Gull Ahmad", key: 2 },
  { text: "Sana Safinaz", key: 3 },
  { text: "Maria", key: 4 },
  { text: "Stiched", key: 5 },
];

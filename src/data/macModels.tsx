import { IProduct } from "../components/models";
import image_1 from "../images/mac_book_air.jpg";
import image_2 from "../images/mac_book_pro.jpg";
import image_3 from "../images/imac.jpg";
import image_4 from "../images/mac_mini.jpg";
import image_5 from "../images/mac_studio.jpg";
import image_6 from "../images/mac_pro_.jpg";

export const macModels: IProduct[] = [
  {
    id: 1,
    title: "MacBook Air",
    description: "Power. It’s in the Air.",
    price: 999,
    category: "laptops",
    image: image_1,
    link: "macbook-air",
  },
  {
    id: 2,
    title: "MacBook Pro",
    description: "Pro anywhere.",
    price: 1999,
    category: "laptops",
    image: image_2,
    link: "macbook-pro",
  },
  {
    id: 3,
    title: "iMac",
    description: "Say hello to the new iMac.",
    price: 525,
    category: "laptops",
    image: image_3,
    link: "imac",
  },
  {
    id: 4,
    title: "Mac Mini",
    description: "More muscle. More hustle.",
    price: 599,
    category: "laptops",
    image: image_4,
    link: "mac-mini",
  },
  {
    id: 5,
    title: "Mac Studio",
    description: "Empower station.",
    price: 1999,
    category: "laptops",
    image: image_5,
    link: "mac-studio",
  },
  {
    id: 6,
    title: "Mac Pro",
    description: "Power to change everything.",
    price: 5999,
    category: "laptops",
    image: image_6,
    link: "mac-pro",
  },
];

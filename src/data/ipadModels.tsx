import { IProduct } from "../components/models";
import image_1 from "../images/ipad_pro.jpg";
import image_2 from "../images/ipad_air.jpg";
import image_3 from "../images/ipad_2.jpg";
import image_4 from "../images/ipad_mini.jpg";
import image_5 from "../images/apple_keyboard.jpg";
import image_6 from "../images/apple_pencil.jpg";

export const ipadModels: IProduct[] = [
  {
    id: 1,
    title: "iPad Pro",
    description: "Supercharged by M2.",
    price: 799,
    category: "tablets",
    image: image_1,
    link: "ipad-pro",
  },
  {
    id: 2,
    title: "iPad Air",
    description: "Light. Bright. Full of might.",
    price: 599,
    category: "tablets",
    image: image_2,
    link: "ipad-air",
  },
  {
    id: 3,
    title: "iPad",
    description: "Lovable. Drawable. Magical.",
    price: 449,
    category: "tablets",
    image: image_3,
    link: "ipad-10.9",
  },
  {
    id: 4,
    title: "iPad Mini",
    description: "Mega power. Mini sized.",
    price: 499,
    category: "tablets",
    image: image_4,
    link: "ipad-mini",
  },
  {
    id: 5,
    title: "iPad Keyboard",
    description: "Keyboards that have you covered.",
    price: 299,
    category: "tablets",
    image: image_5,
    link: "ipad-keyboard",
  },
  {
    id: 6,
    title: "iPad Pencil",
    description: "Dream it up. Jot it down.",
    price: 129,
    category: "tablets",
    image: image_6,
    link: "ipad-pencil",
  },
];

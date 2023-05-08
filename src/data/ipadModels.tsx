import { IProduct } from "../components/models";
import image_1 from "../images/ipad_pro.jpg";
import image_2 from "../images/ipad_air.jpg";
import image_3 from "../images/ipad_2.jpg";
import image_4 from "../images/ipad_mini.jpg";
// import image_5 from "../images/mac_studio.jpg";
// import image_6 from "../images/mac_pro_.jpg";

export const ipadModels: IProduct[] = [
  {
    id: 1,
    title: "iPad Pro",
    description: "Supercharged by M2.",
    price: 799,
    category: "tablets",
    image: image_1,
  },
  {
    id: 2,
    title: "iPad Air",
    description: "Light. Bright. Full of might.",
    price: 599,
    category: "tablets",
    image: image_2,
  },
  {
    id: 3,
    title: "iPad",
    description: "Lovable. Drawable. Magical.",
    price: 449,
    category: "tablets",
    image: image_3,
  },
  {
    id: 4,
    title: "iPad Mini",
    description: "Mega power. Mini sized.",
    price: 499,
    category: "tablets",
    image: image_4,
  },
];

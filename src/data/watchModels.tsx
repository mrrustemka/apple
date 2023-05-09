import { IProduct } from "../components/models";
import image_1 from "../images/wathc_ultra.jpg";
import image_2 from "../images/watch_series_8.jpg";
import image_3 from "../images/watch_se.jpg";
import image_4 from "../images/watch_hermes.jpg";
import image_5 from "../images/watch_nike.jpg";

export const watchModels: IProduct[] = [
  {
    id: 1,
    title: "Apple Watch Ultra",
    description: "Pioneering engineering.",
    price: 799,
    category: "watchs",
    image: image_1,
    link: "watch-ultra",
  },
  {
    id: 2,
    title: "Apple Watch Series 8",
    description: "A healthy leap ahead.",
    price: 399,
    category: "watchs",
    image: image_2,
    link: "watch-series-8",
  },
  {
    id: 3,
    title: "Apple Watch SE",
    description: "A great deal to love.",
    price: 249,
    category: "watchs",
    image: image_3,
    link: "watch-se",
  },
  {
    id: 4,
    title: "Apple Watch Hermes",
    description: "Artistry in full bloom.",
    price: 1229,
    category: "watchs",
    image: image_4,
    link: "watch-hermes",
  },
  {
    id: 5,
    title: "Apple Watch Nike",
    description: "Run with it.",
    price: 799,
    category: "watchs",
    image: image_5,
    link: "watch-nike",
  },
];

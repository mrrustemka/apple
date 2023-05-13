import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import macModels from "../data/macModels";
import ipadModels from "../data/ipadModels";
import iphoneModels from "../data/iphoneModels";
import watchModels from "../data/watchModels";

const ProductModel = () => {
  const params = useParams();
  const modelTitle =
    macModels.find((model) => model.link === params.link)?.title ||
    ipadModels.find((model) => model.link === params.link)?.title ||
    iphoneModels.find((model) => model.link === params.link)?.title ||
    watchModels.find((model) => model.link === params.link)?.title;

  const modelPrice =
    macModels.find((model) => model.link === params.link)?.price ||
    ipadModels.find((model) => model.link === params.link)?.price ||
    iphoneModels.find((model) => model.link === params.link)?.price ||
    watchModels.find((model) => model.link === params.link)?.price;

  const modelImage =
    macModels.find((model) => model.link === params.link)?.image ||
    ipadModels.find((model) => model.link === params.link)?.image ||
    iphoneModels.find((model) => model.link === params.link)?.image ||
    watchModels.find((model) => model.link === params.link)?.image;

  return (
    <div className="bg-white py-5">
      <img
        src={modelImage}
        className="img-thumbnail m-0 d-block mx-auto"
        alt="Apple Product"
      />
      <h3 className="text-center mt-2">{modelTitle}</h3>
      <h4 className="text-center">{modelPrice}$</h4>
    </div>
  );
};

export default ProductModel;

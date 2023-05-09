import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import headers from "../data/headers";
import { macModels } from "../data/macModels";
import { ipadModels } from "../data/ipadModels";
import { iphoneModels } from "../data/iphoneModels";
import { watchModels } from "../data/watchModels";
import Product from "./Product";

const ProductType = () => {
  const params = useParams();
  const header = headers.find((header) => header.slug === params.slug);
  if (!header) {
    return <NotFound />;
  } else if (header.slug === "mac") {
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {macModels.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  } else if (header.slug === "ipad") {
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {ipadModels.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  } else if (header.slug === "iphone") {
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {iphoneModels.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
  } else
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {watchModels.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
};

export default ProductType;

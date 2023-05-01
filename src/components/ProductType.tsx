import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import headers from "../data/headers";

const ProductType = () => {
  const params = useParams();
  const header = headers.find((header) => header.link === params.link);
  if (!header) {
    console.log({ headers });
    return <NotFound />;
  }

  return <h2>{header.title}</h2>;
};

export default ProductType;

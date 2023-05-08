import React, { useState } from "react";
import { IProduct } from "./models";
import { Image, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnClassName = details
    ? "btn btn-outline-secondary btn-sm bg-white p-2 d-block m-auto"
    : "btn btn-outline-secondary btn-sm p-2 d-block m-auto text-white";

  let imgClassName: string;

  if (product.category == "smartphones" && details) {
    imgClassName = "card-img-top rounded smartphones-on";
  } else if (product.category == "smartphones" && !details) {
    imgClassName = "card-img-top rounded smartphones-off";
  } else if (product.category == "laptops" && details) {
    imgClassName = "card-img-top rounded laptops-on";
  } else if (product.category == "laptops" && !details) {
    imgClassName = "card-img-top rounded laptops-off";
  } else if (product.category == "tablets" && details) {
    imgClassName = "card-img-top rounded tablets-on";
  } else if (product.category == "tablets" && !details) {
    imgClassName = "card-img-top rounded tablets-off";
  } else if (product.category == "watchs" && details) {
    imgClassName = "card-img-top rounded watchs-on";
  } else {
    imgClassName = "card-img-top rounded watchs-off";
  }

  return (
    <div className="card py-2 px-4 rounded mb-1 me-1 bg-dark float-start">
      <img src={product.image} className={imgClassName} alt={product.title} />
      <h4 className="text-center text-white">{product.title}</h4>
      <div className="bg-danger rounded w-25 m-auto mb-2">
        <p className="text-center text-white mb-0">{product.price}$</p>
      </div>
      <button
        type="button"
        className={btnClassName}
        onClick={() => setDetails(!details)}
      >
        {details ? "Hide Description" : "Show Description"}
      </button>
      {details && (
        <div className="border p-4 mt-2 rounded text-center">
          <p className="text-white">{product.description}</p>
        </div>
      )}
    </div>
  );
}

export default Product;

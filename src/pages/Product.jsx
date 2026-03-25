import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../lib/data/products";

import ProductDetailCard from "../components/ProductDetailCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = getProductById(id);

    if (!getProduct) {
      navigate("/");
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(getProduct);
  }, [id, navigate]);

  return (
    <div className="page">
      <div className="container">
        {!product ? (
          <LoadingSpinner />
        ) : (
          <ProductDetailCard product={product} />
        )}
      </div>
    </div>
  );
}

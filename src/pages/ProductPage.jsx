import { useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();
  console.log(params);
  console.log(import.meta.env.VITE_API_URL);

  return <div>Product Page {params.id}</div>;
};

export default ProductPage;

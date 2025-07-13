import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productid } = router.query;

  return (
    <div>
      <h1>Property Detail</h1>
      <p>Here you can find the details of a specific property with ID: {productid}</p>
    </div>
  );
};

export default PropertyDetail;

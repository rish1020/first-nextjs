import { APIConstants } from "../constants/APIConstants";

export const getServerSideProps = async () => {
  const response = await fetch(APIConstants.Products);
  const products = await response.json();
  return {
    props: {
      products
    }
  }
}

function Products({products}) {
  return (
    <div>
      {products.map((product) => {
        return <div key={product.id}>
        {product.name}
      </div>})}
    </div>
  )
}

export default Products;
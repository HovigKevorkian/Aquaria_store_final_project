
import React, { useEffect, useState } from "react";
import axios from "axios";

// const PRODUCT_SERVICE_URL = "http://localhost:8080/products/list";

const ProductsTableHooks = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isFetching, setisFetching] = useState({ isFetching: false });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        console.log( isLoading)
        const response = await axios.get("http://localhost:8080/products/list");
        console.log( "ok1",isLoading, response)
      setProducts( response.data.result );
      setIsLoading(false)
      } catch (e) {
        console.log('ok error', e);
        setProducts({ products});
        setIsLoading(false)
      }
    };
    fetchProducts();
 
  }, []);

  console.log('ok products', products)
  return (
    [{products, isLoading}, setProducts]
    // <div>
    //   ok 
    //   {isLoading ? 'Loading...': 'Not Loading'}
    //   { 
    //    products.map(product => product.product_title +' ' )
    //   }
    // </div>
    )
  // return [products];
  //   return <SimpleUserTable data={data.users} isFetching={data.isFetching} />;
  
}


export default ProductsTableHooks;

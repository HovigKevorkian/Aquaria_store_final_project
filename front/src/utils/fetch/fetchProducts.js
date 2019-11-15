
import React, { useEffect, useState } from "react";
import axios from "axios";

// const PRODUCT_SERVICE_URL = "http://localhost:8080/products/list";

const ProductsTableHooks = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState();
  const [URL, setURL] = useState('http://localhost:8080/products/list');
  // const [theMethod, setTheMethod] = useState("get");
  // const [isFetching, setisFetching] = useState({ isFetching: false });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
      
        console.log( isLoading)
        const response = await axios({
          method: 'get',
          url: `${URL}`,
          
        });
        // .get("http://localhost:8080/products/list");get
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
  
  }, [URL]);

  console.log('ok products', products, URL, query)
  return (
    // [{products, isLoading}, setProducts]
    <div>
      ok 
      {isLoading ? 'Loading...': 'Not Loading'}
      { 
       products.map(product => product.product_title +' ' )
      }

    <div>
    <form
        onSubmit={event => {
          setURL(`http://localhost:8080/products/${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>


        {/* <input
          type="text"
          value={`${theMethod}`}
          onChange={event => setTheMethod(event.target.value)}
        />
        <button type="submit">method for fetching</button> */}
      </form>


    </div>
    
    </div>
    )
  // return [products];
  //   return <SimpleUserTable data={data.users} isFetching={data.isFetching} />;
  
}


export default ProductsTableHooks;

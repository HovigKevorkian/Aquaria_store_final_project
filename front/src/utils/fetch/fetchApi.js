import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
const useDataApi = (initialUrl, initialData) => {
  const [FetchMethod, setFetchMethod] = useState("get");
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios.get({
        //   method: "post",
        //   url: "/login",
        //   data: {
        //     firstName: "Finn",
        //     lastName: "Williams"
        //   }
       
        });
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return [{ data, isLoading, isError }, setUrl];
};
function Fetcher() {
  const [query, setQuery] = useState("");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:8080/products/list",
    
    { hits: [] }
  );
  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch(`http://localhost:8080/products/${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default Fetcher;

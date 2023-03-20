import React, { useEffect, useState } from "react";
import TableDetail from "../../components/formTable/TableDetail";

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((actualData) => setData(actualData))
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const resData = await response.json();
      setData(resData);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return <>{!isLoading && data && <TableDetail data={data} />}</>;
};

export default Table;

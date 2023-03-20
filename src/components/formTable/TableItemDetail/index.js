import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TableItemDetail = () => {
  
  const params = useParams();

  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    const fetchItemData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const resData = await response.json();
      setDataItem(resData);
    }
    fetchItemData();
  }, [])

  return (
    <>
    <div className="card w-50 m-auto my-5">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <h5>User Id: {dataItem?.userId}</h5>
        </div>
        <div>
          <strong> Id: </strong> {dataItem?.id}
        </div>
        <div>
          <strong>Title: </strong>
          {dataItem?.title}
        </div>
        <div>
          <strong> Description: </strong>
          {dataItem?.body}
        </div>
      </div>
    </div>
    </>
  );
};

export default TableItemDetail;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const ShowVegies = () => {
  const [vegi, setVegies] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/vegies/${id}`)
      .then((response) => {
        setVegies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Food</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{vegi._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Food Name</span>
            <span>{vegi.foodname}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Quantity</span>
            <span>{vegi.quantity}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Price</span>
            <span>{vegi.price}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(vegi.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(vegi.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowVegies;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedCard from "./DetailedCard";

const Detailed = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4280/api/blog/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setBlog(response.data.Blog);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>; // Or show a spinner
  }

  return (
    <DetailedCard
      title={blog.title}
      category={blog.tags[0]}
      author={blog.author[0].username}
      body={blog.body}
      description={blog.description}
    />
  );
};

export default Detailed;

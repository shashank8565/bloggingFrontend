import React, { useEffect, useState } from "react";
import AllBlogs from "./AllBlogs";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4280/api/blogs", {
        withCredentials: true, // important if you're using auth cookies
      })
      .then((response) => {
        setBlogs(response.data.blogs); // assuming your API returns an array of blogs
      })
      .catch((error) => {
        console.error("Failed to fetch blogs:", error);
      });
  }, []); // empty dependency array = runs only once on mount

  return (
    <div className="p-4 flex flex-col gap-2">
      {console.log(blogs)}
      {blogs.map((blog, index) => (
        <AllBlogs
          key={blog._id}
          id={blog._id}
          title={blog.title}
          category={blog.tags[0]}
          author={blog.author.username}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default Home;

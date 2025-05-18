import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import BlogCard from "./BlogCard";
import "./card.css";
import AllBlogs from "./AllBlogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4280/api/blog/blogs", {
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
    <div className="flex flex-col px-6 py-8 gap-6 ">
      <div className="blog-grid">
        {blogs.slice(0, 6).map((blog, index) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            category={blog.tags[0]}
            author={blog.author[0].username}

            // createdAt={blog.createdAt}
          />
        ))}
      </div>
      <AllBlogs />
    </div>
  );
};

export default Blogs;

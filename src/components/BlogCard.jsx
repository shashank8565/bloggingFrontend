import React from "react";
import "./card.css"; // Or move styles into global CSS if you prefer

const BlogCard = ({ title, image, author, category }) => {
  //   const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <div
      className="blog-card"
      style={{
        backgroundImage: `url(${image || "img.jpeg"})`,
      }}
    >
      <div className="overlay">
        <span className="tag">{category}</span>
        <h3>{title}</h3>
        <div className="meta">
          <span>{author || "Unknown Author"}</span>
          {/* <span>{formattedDate}</span> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

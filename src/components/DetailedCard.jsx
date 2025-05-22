import React from "react";

const DetailedCard = ({ title, author, body, category, description }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>

      {/* Author & Meta */}
      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-2">
        <span>{author}</span>
        <span className="border-l h-4 border-gray-400"></span>
        <span>{category}</span>
      </div>

      <img
        src="https://picsum.photos/300/200"
        alt="blog"
        className="w-full rounded-lg shadow mb-6"
      />

      {/* Body Text */}
      <div className="text-gray-800 space-y-4">
        <p>{description}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default DetailedCard;

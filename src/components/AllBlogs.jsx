import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router";

const AllBlogs = ({ title, author, category, description, id }) => {
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border shadow-sm">
      <img
        src="https://picsum.photos/300/200"
        alt="blog"
        className="w-full md:w-60 h-40 object-cover rounded-md"
      />
      <CardContent className="p-0 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-sm text-muted-foreground mb-2">
            {category} | {author}
          </p>
          <p className="text-sm text-gray-600">
            {description}

            <Link to={`/blog/${id}`} className="text-blue-600 underline m-1">
              Read more
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllBlogs;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const AllBlogs = () => {
  return (
    <Card className="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-sm">
      <img
        src="https://picsum.photos/300/200"
        alt="blog"
        className="w-full md:w-60 h-40 object-cover rounded-md"
      />
      <CardContent className="p-0 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Coffee sugar, chicory seasonal espresso barista americano
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            JUNE 25, 2020 | MUSIC
          </p>
          <p className="text-sm text-gray-600">
            Arista, percolator, cream, aromatic, fair trade, breve body instant
            lungo blue mountain cappuccino. Americano aroma mug espresso latte
            crema milk redeye acerbic. Galão robusta instant, decaffeinated, so
            fair trade wings.{" "}
            <a href="#" className="text-blue-600 underline">
              Read more...
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AllBlogs;

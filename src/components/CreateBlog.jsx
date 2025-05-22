import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import JoditEditor from "jodit-react";
import axios from "axios";

const CreateBlog = () => {
  const postData = async (blogData) => {
    try {
      const resp = await axios.post(
        "http://localhost:4280/api/create",
        blogData,
        {
          withCredentials: true,
        }
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    tags: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag); // removes empty strings

    const blogData = {
      title: formData.title,
      description: formData.description,
      body: formData.body,
      tags: tagsArray,
    };

    postData(blogData);

    // You can send this to your backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-10">
      <Card className="w-full max-w-3xl p-6 shadow-xl border border-gray-200 rounded-2xl bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          📝 Create a New Blog
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="title" className="text-base">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. My Journey into Web Dev"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-base">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="A short summary of your blog"
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="body">Body</Label>
            <JoditEditor
              value={formData.body}
              onChange={(newContent) =>
                setFormData((prev) => ({ ...prev, body: newContent }))
              }
            />
          </div>

          <div>
            <Label htmlFor="tags" className="text-base">
              Tags
            </Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Comma-separated e.g. tech, react, life"
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-4 text-base transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Publish Blog
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateBlog;

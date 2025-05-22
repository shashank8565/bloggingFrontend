import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [preferredTags, setPreferredTags] = useState([]);
  let navigate = useNavigate();

  const options = [
    { value: "Technology", label: "Technology" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Finance", label: "Finance" },
  ];

  const handleSelect = (selected) => {
    const valuesOnly = selected ? selected.map((option) => option.value) : [];
    setPreferredTags(valuesOnly);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4280/api/auth/signup",
        {
          username,
          email,
          password,
          preferredTags,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
    }
  };

  console.log({
    username,
    email,
    password,
    preferredTags,
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Register to ReaderBee
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
          <Select
            options={options}
            value={options.filter((opt) => preferredTags.includes(opt.value))}
            isMulti
            onChange={handleSelect}
            placeholder="Select preferred tags"
            className="w-full"
            classNamePrefix="react-select"
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="default"
            onClick={handleRegister}
            className="w-full max-w-md  bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;

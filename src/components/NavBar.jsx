import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg p-5 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">ReaderBee</h1>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/home"
                  className="text-3xl font-semibold hover:text-gray-200"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/profile"
                  className="text-lg font-semibold hover:text-gray-200"
                >
                  Profile
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/blogs"
                  className="text-lg font-semibold hover:text-gray-200"
                >
                  Blogs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link to="/create-blog">
            <Button className=" bg-white text-blue-600 font-semibold hover:bg-gray-200 items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Blog
            </Button>
          </Link>

          <Button
            variant="secondary"
            className="bg-white text-blue-600 font-semibold hover:bg-gray-200"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

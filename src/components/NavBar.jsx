import React, { useState } from "react";
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
import { Plus, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-lg p-5 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">ReaderBee</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex">
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
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link to="/create">
            <Button className="bg-white text-blue-600 font-semibold hover:bg-gray-200 items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Blog
            </Button>
          </Link>
        </div>

        {/* Sign Out button (visible always on md and above, inside mobile menu on small screens) */}
        <div className="hidden md:flex">
          <Button
            variant="secondary"
            className="bg-white text-blue-600 font-semibold hover:bg-gray-200"
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Mobile menu - slides down when open */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 pt-4 pb-6 space-y-4">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4 px-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/home"
                    className="text-lg font-semibold hover:text-gray-200"
                    onClick={() => setIsOpen(false)} // Close menu on click
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
                    onClick={() => setIsOpen(false)}
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
                    onClick={() => setIsOpen(false)}
                  >
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <div className="px-4">
                <Button
                  variant="secondary"
                  className="w-full bg-white text-blue-600 font-semibold hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Out
                </Button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

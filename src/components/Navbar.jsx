import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import logo from '../assets/redstore.jpg';
import cartIcon from '../assets/cart.png';
import menuIcon from '../assets/menu.png';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-white to-red-100 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Redstore" className="w-40 h-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-500 font-semibold">HOME</Link>
            <Link to="/products" className="text-gray-700 hover:text-red-500 font-semibold">PRODUCTS</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500 font-semibold">ABOUT</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500 font-semibold">CONTACT</Link>
            <Link to="/account" className="text-gray-700 hover:text-red-500 font-semibold">ACCOUNT</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className="w-10 h-10" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden">
                  <img src={menuIcon} alt="Menu" className="w-10 h-10" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate to different sections of the store.
                  </SheetDescription>
                </SheetHeader>
                <nav className="mt-8">
                  <Link to="/" className="block py-2 text-gray-700 hover:text-red-500 font-semibold">HOME</Link>
                  <Link to="/products" className="block py-2 text-gray-700 hover:text-red-500 font-semibold">PRODUCTS</Link>
                  <Link to="/about" className="block py-2 text-gray-700 hover:text-red-500 font-semibold">ABOUT</Link>
                  <Link to="/contact" className="block py-2 text-gray-700 hover:text-red-500 font-semibold">CONTACT</Link>
                  <Link to="/account" className="block py-2 text-gray-700 hover:text-red-500 font-semibold">ACCOUNT</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

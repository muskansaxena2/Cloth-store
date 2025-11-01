import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Button from './Button';
import star from '../assets/star.jpg';
import star1 from '../assets/star1.jpg';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300 cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h4>
              <div className="flex items-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <img key={i} src={star} alt="Star" className="w-5 h-5" />
                ))}
                <img src={star1} alt="Star" className="w-5 h-5" />
              </div>
              <p className="text-gray-600 font-bold">{product.price}</p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              Here are the details for {product.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
            <p className="text-gray-600">
              This is a more detailed description of the product. It's a great product, and you should definitely buy it!
            </p>
            <p className="text-gray-800 font-bold text-2xl">{product.price}</p>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;

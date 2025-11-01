import { createSlice } from '@reduxjs/toolkit';
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';
import product5 from '../assets/product-5.jpg';
import product6 from '../assets/product-6.jpg';
import product7 from '../assets/product-7.jpg';
import product8 from '../assets/product-8.jpg';
import product9 from '../assets/product-9.jpg';
import product10 from '../assets/product-10.jpg';
import product11 from '../assets/product-11.jpg';
import product12 from '../assets/product-12.jpg';

const initialState = {
  products: [
    { id: 1, name: 'Red Printed T-Shirt', price: '₹50.00', image: product1 },
    { id: 2, name: 'HRX Sports Shoes', price: '₹75.00', image: product2 },
    { id: 3, name: 'HRX Gray Trackpants', price: '₹45.00', image: product3 },
    { id: 4, name: 'Blue Printed T-Shirt', price: '₹55.00', image: product4 },
    { id: 5, name: 'Puma All-Season Shoes', price: '₹120.00', image: product5 },
    { id: 6, name: 'Black Printed T-Shirt', price: '₹50.00', image: product6 },
    { id: 7, name: 'HRX Socks', price: '₹15.00', image: product7 },
    { id: 8, name: 'Fossil Watch', price: '₹150.00', image: product8 },
    { id: 9, name: 'Roadster Watch', price: '₹130.00', image: product9 },
    { id: 10, name: 'HRX Black Shoes', price: '₹80.00', image: product10 },
    { id: 11, name: 'Gray Nike Shoes', price: '₹110.00', image: product11 },
    { id: 12, name: 'HRX Black Trackpants', price: '₹50.00', image: product12 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;

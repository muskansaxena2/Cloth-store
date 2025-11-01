import React from 'react';
import quote from '../assets/quote.jpg';
import star from '../assets/star.jpg';
import star1 from '../assets/star1.jpg';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center transform hover:-translate-y-2 transition duration-300">
      <img src={quote} alt="Quote" className="w-12 h-12 mx-auto mb-4" />
      <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
      <div className="flex justify-center items-center mb-4">
        {[...Array(4)].map((_, i) => (
          <img key={i} src={star} alt="Star" className="w-5 h-5" />
        ))}
        <img src={star1} alt="Star" className="w-5 h-5" />
      </div>
      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-2" />
      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
    </div>
  );
};

export default TestimonialCard;

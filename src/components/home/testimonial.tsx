import React from 'react';
import { Star, StarHalf, StarOff } from 'lucide-react';

const Card = ({ image, name, position, message, stars }: any) => {
  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);  // Full stars (integer part)
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;  // Half stars (if there's a fraction)

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-star-${index}`} className="text-[#745CEC]" size={15} />
        ))}
        {halfStars > 0 && (
          <StarHalf className="text-[#745CEC]" size={15} />
        )}
        {[...Array(5 - fullStars - halfStars)].map((_, index) => (
          <StarOff key={`empty-star-${index}`} className="text-gray-300" size={15} />
        ))}
      </>
    );
  };

  return (
    <div className="p-5 lg:p-10 bg-[rgba(16,16,42,0.5)] rounded-lg overflow-hidden relative transition-all duration-500 group">
      {/* Background Image on hover */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/tranding-2.png')] bg-cover bg-no-repeat bg-center transition-all duration-500 opacity-0 group-hover:opacity-100 z-0"></div>
      
      {/* Image and Name Section */}
      <div className="flex gap-5 relative z-10">
        <img src={image} alt={name} className='transform transition-transform duration-200 group-hover:scale-110' />
        <div>
          <h3 className="text-[16px] md:text-[20px] lg:text-[24px]">{name}</h3>
          <h4 className="text-[14px] md:text-[16px] text-[#92A1B4]">{position}</h4>
        </div>
      </div>
      
      {/* Message */}
      <p className="text-[14px] md:text-[16px] text-[#92A1B4] py-5 relative z-10">{message}</p>

      {/* Star Rating */}
      <div className="flex items-center gap-2 text-[#745CEC] relative z-10">
        {renderStars(stars)}
        <span className="text-[#92A1B4]">({stars})</span>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="slider-area text-white">
      <div className="max-w-[1200px] mx-auto py-20 px-5 lg:px-0">
        <div className="flex items-center justify-center gap-3">
          <img src="/images/about-1.png" alt="logo" className="transform scale-x-[-1]" />
          <h5 className="uppercase text-[#745CEC] text-[18px]">Testimonial</h5>
          <img src="/images/about-1.png" alt="logo" />
        </div>
        <h2 className="text-[26px] lg:text-[40px] text-center mt-2 mb-10">From Our Clients</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card
            name="Alex John"
            image="/testimonial/crypto-8.png"
            position="Founder"
            message="Holisticly recaptiualiz collaborative deliverables rather than interactive opportunities. Continually myoca web-enabled done"
            stars={4.5}
          />
          <Card
            name="Debra Hiles"
            image="/testimonial/crypto-7.png"
            position="Student"
            message="Holisticly recaptiualiz collaborative deliverables rather than interactive opportunities. Continually myoca web-enabled done"
            stars={4.5}
          />
          <Card
            name="Anna Asler"
            image="/testimonial/crypto-9.png"
            position="Investor"
            message="Holisticly recaptiualiz collaborative deliverables rather than interactive opportunities. Continually myoca web-enabled done"
            stars={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

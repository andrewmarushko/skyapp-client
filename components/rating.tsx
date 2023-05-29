import React from 'react';
import { Icons } from '@/components/icons';

const Rating = ({rating} : any ) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="flex">
      {stars.map((star, index) => (
        <div
          key={index}
        >
          <Icons.star 
            className={`${star <= rating ? 'fill-warning' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Rating;

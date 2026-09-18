import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const FoodCard = ({food}) => {
    const {id, name , price , category, description, rating,  image , isPopular} = food ;
    return (
       <>
       <Link href={`/foods/${id}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={image}
      alt="Shoes" height={300} width={500} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">${price}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
    </div>
       </Link>
       </>
    );
};

export default FoodCard;
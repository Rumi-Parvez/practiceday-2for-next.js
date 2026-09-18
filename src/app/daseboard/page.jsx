import React from 'react';
import Image from 'next/image';


const DaseboardPage = () => {
    return (
      <>
      
       <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <Image src="https://img.daisyui.com/images/stock/creditcard.webp" height={500} width={700} alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
      </>  
    );
};

export default DaseboardPage;
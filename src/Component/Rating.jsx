import React, { useState } from "react";

const Rating = () => {
  const [starRating, setStarRating] = useState();
  const [hover, setHover] = useState();

  let arr = new Array(5).fill(0);

  return (

    <>
     <div className='head'>
        <h1>Star Rating</h1>
        <p>Please Rate Us</p>
     </div>

    <div className="container">
      {arr.map((curRate, index) => {
        return (
          <span
            className={index < starRating || index < hover ? "yellow" : "black"}
            key={index}
            onClick={() => setStarRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
    </>
  );
};

export default Rating;

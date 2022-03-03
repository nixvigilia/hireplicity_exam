import React from "react";

const array = [1, 2, 3, 4, 5, 6];

const FindValue = () => {
  const checkValue = (num) => {
    const result = array.find((el) => el === num); // value
    // const result = array.includes(num); // boolean
    return result;
  };

  const result = checkValue(6);
  console.log(result);

  return (
    <div>
      <div>FindValue</div>
    </div>
  );
};

export default FindValue;

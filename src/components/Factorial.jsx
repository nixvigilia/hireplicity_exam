import React from "react";

const Factorial = () => {
  const factorialize = (num) => {
    if (num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
      num = num * i; // num *= i
    }
    return num;
  };

  const value = factorialize(5);

  return <div>{value}</div>;
};

export default Factorial;

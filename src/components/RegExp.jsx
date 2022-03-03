import React from "react";

const RegExp = () => {
  const regex = /(0?[1-9]|1[012])\/(0?[1-9]|1[0-9]|3[01])\/\d{4}/;

  const dates = [
    "02/13/1991",
    "2022/09/20",
    "3/3/2022",
    "03/9/2022",
    "2/09/2022",
    "2022/09/20",
  ];

  //Iterate array
  dates.forEach(function (date) {
    console.log(date + " match?");
    console.log("regex", regex.test(date));
  });

  return <div>RegExp</div>;
};

export default RegExp;

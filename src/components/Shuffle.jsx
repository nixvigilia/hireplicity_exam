import React from "react";

const items = [
  { name: "Nicholai", value: 35 },
  { name: "John", value: 29 },
  { name: "Vigilia", value: 355 },
  { name: "Galicha", value: 85 },
];

const list = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const Shuffle = () => {
  const sortItems = (data) => {
    data.sort((a, b) => a.value - b.value);
  };

  const sortList = (data) => {
    data.sort(() => Math.random() - Math.random());
  };

  console.log(Math.random());

  sortItems(items);
  sortList(list);

  console.log(items);
  console.log(list);
  return <div>Shuffle</div>;
};

export default Shuffle;

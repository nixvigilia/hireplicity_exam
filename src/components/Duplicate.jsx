import React from "react";

const Duplicate = () => {
  const removeDuplicates = () => {
    const anime = [
      { title: "One Piece", creator: "Eiichiro Oda" },
      { title: "Demon Slayer", creator: "Koyoharu Gotouge" },
      { title: "Naruto", creator: "Masashi Kishimoto" },
      { title: "Naruto", creator: "Masashi Kishimoto" },
    ];

    console.log(anime);

    let newArray = [];

    let uniqueObject = {};

    for (let i in anime) {
      const objTitle = anime[i]["title"];
      uniqueObject[objTitle] = anime[i];
    }

    for (var i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }

    console.log("new", newArray);
  };
  removeDuplicates();
  return <div>Duplicate</div>;
};

export default Duplicate;

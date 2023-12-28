import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Hans Zimmer",
    "The Local Train",
    "Robo Wars",
    "Spoken Word",
    "Cricket",
    "Lallantop",
    "Dostcast",
    "MTV",
    
  ];
  return (
    <div className=" flex max-w-full overflow-x-scroll">
     
        {list.map((name, i) => (
          <Button name={name} key={i} />
        ))}
     
    </div>
  );
};

export default ButtonList;

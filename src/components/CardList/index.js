import React, { useState, useEffect } from "react";
import style from "./CardList.module.css";
import Card from "../Card";
import EmptyCard from "../EmptyCard";

const CardList = ({ data, query }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1);

  // key press event
  const handleKeyPress = (event) => {
    if(event.key === 'ArrowDown') {
      setActiveCardIndex(prevState => {
        if(prevState === -1) {
          return 0;
        } else if(prevState < (data.length -1)) {
          return prevState+1;
        }
        return prevState;
      });
      
    } else if(event.key === 'ArrowUp') {
      setActiveCardIndex(prevState => {
        if(prevState === -1) {
          return (data.length -1);
        } else if(prevState > 0) {
         return prevState-1;
        }
        return prevState;
      });
    }
  }

  useEffect(() => {
    // check if active card index > -1 then only make that card appears into view
    if(activeCardIndex !== -1) {
      document.getElementById(`cardId-${activeCardIndex}`).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });}
    console.log("active index",activeCardIndex)
  },[activeCardIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }
  },[data]);


  return (
    <div className={ data.length > 0 ? style.cardListWrapper : style.emptyList} >
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            query={query}
            isActive={index === activeCardIndex}
            setActiveCardIndex={setActiveCardIndex}
          />
        ))
      ) : (
        // show empty card if query is empty
        query === "" ? <></>: <EmptyCard />
      )}
    </div>
  );
};

export default CardList;

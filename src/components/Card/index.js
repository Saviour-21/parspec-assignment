import React, { useEffect, useState } from "react";
import style from "./card.module.css";
import HighlightWord from "../HightlightWord";

// Card component
const Card = ({
  setActiveCardIndex,
  item,
  index,
  query,
  isActive,
}) => {
  const [itemsPresent, setItemPresent] = useState(false);

  useEffect(() => {
    setItemPresent(
      query !== ""
        ? item.items.filter((item) =>
            item.toLowerCase().startsWith(query.toLowerCase())
          )
        : []
    );
  }, [item.items, query]);

  // To handle a mouseover event to find out hover card index 
  const handleMouseOver = () => {
    setActiveCardIndex(index);
  }

  // To handle a mouse leave event function to retain the last selected card
  const handleMouseLeave = () => {
    setActiveCardIndex(prev => prev);
  }

  return (
    <div
      className={`${style.outerWrapper} ${isActive ? style.activeCard : ""}`}
      id={`cardId-${index}`}
      onMouseMove={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <b><HighlightWord query={query} word={item.id} /></b>
      <HighlightWord query={query} word={item.name} />
      {itemsPresent.length > 0 &&
        itemsPresent.map((_, index) => (
          <span className={style.items} key={index}>
            <ul>
              <li>
                <HighlightWord query={query} word={query} /> found in items{" "}
              </li>
            </ul>
          </span>
        ))}
      <HighlightWord query={query} word={item.address} />
    </div>
  );
};

export default Card;

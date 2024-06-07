import React from "react";
import style from "./HighlightWord.module.css";
const HighlightWord = ({ query, word }) => {
  const data =
    query.length > 0 ? word.split(new RegExp(`(${query})`, "gi")) : [`${word}`];

  return (
    <span className={style.word}>
      {data.map((item, index) =>
        (item.toLowerCase() === query.toLowerCase() ? <b key={index} className={style.highlight}>{item}</b> : <span key={index}>{item}</span>)
      )}
    </span>
  );
};

export default HighlightWord;

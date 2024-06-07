import React from "react";
import style from "./EmptyCard.module.css";

const EmptyCard = () => {
    return(
        <div className={style.outerWrapper}>
            No User Found
        </div>
    )
}

export default EmptyCard;
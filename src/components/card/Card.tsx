import React, {FC} from "react"
import {ICard} from "../../type";

const Card: FC<ICard> = ({label, icon, cssClass}: ICard) => {
    return (
        <article className={["card", cssClass ?? ""].join(" ")}>
            <div>
                <img src={icon} alt={label}/>
            </div>
            <h3>{label}</h3>
        </article>
    )
}

export default Card
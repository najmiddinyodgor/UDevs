import React, {FC} from "react"
import Card from "./Card";
import {ICard} from "../../type";

const BigCard: FC<ICard> = (props: ICard) => {
    return (
        <Card {...props} cssClass={"card--big"}/>
    )
}

export default BigCard
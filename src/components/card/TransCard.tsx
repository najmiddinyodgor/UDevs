import React, {FC} from "react"
import {ICard} from "../../type";
import Card from "./Card";

const TransCard: FC<ICard> = (props: ICard) => {
    return (
        <Card {...props} cssClass={"card--transparent"}/>
    )
}

export default TransCard
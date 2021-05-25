import React, {FC} from "react"
import Card from "./Card";
import {ICard} from "../../type";

const MiniCard: FC<ICard> = (props: ICard) => {
    return (
        <Card {...props} cssClass={"card--mini"}/>
    )
}

export default MiniCard
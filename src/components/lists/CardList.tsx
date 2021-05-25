import React, {FC} from "react"
import {ICard} from "../../type";

type Props = {
    cards: ICard[],
    Component: FC<ICard>,
    cssClass?: string,
    left?: boolean,
    right?: boolean
}

const CardList: FC<Props> = ({cssClass, cards, left, right, Component}: Props) => {
    const classes: string[] = [];
    if (left) classes.push("card--left")
    if (right) classes.push("card--right")
    return (
        <div className={["card-list", cssClass ?? ""].join(" ")}>
            {
                cards.map((card: ICard) => {
                    if (left || right) {
                        return (
                            <div key={card.label} className={classes.join(" ")}>
                                <Component  {...card} />
                            </div>
                        )
                    }
                    return (
                        <Component key={card.label} {...card} />
                    )
                })
            }
        </div>
    )
}

export default CardList
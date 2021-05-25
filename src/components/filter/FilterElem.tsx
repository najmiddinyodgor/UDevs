import React, {FC} from "react"
import {ICard} from "../../type";
import Card from "../card/Card";
import {FilterContext} from "../../contexts/FilterContext";

type Props = ICard & { id: number }

const FilterElem: FC<Props> = ({icon, label, id, cssClass}: Props) => {
    return (
        <FilterContext.Consumer>
            {
                ({active}) => (
                    <Card label={label} icon={icon}
                          cssClass={["card--filter", cssClass, active === id ? "active" : ""].join(" ")}/>
                )
            }
        </FilterContext.Consumer>
    )
}

export default FilterElem
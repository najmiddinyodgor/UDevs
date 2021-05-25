import React, {FC} from "react"
import {ICard} from "../../type";
import Card from "../card/Card";
import classNames from "classnames";

type Props = ICard & { isActive: boolean }

const FilterElem: FC<Props> = ({icon, label, isActive, cssClass}: Props) => {
    return (
        <Card label={label} icon={icon}
              cssClass={classNames("card--filter", cssClass, {"active": isActive})}/>
    )
}

export default FilterElem
import React, {FC} from "react"
import classNames from "classnames";

type Props = {
    label: string,
    isActive: boolean,
    clickHandler: Function
}

const FilterButton: FC<Props> = ({label, isActive, clickHandler}: Props) => {
    return (
        <button className={classNames("tools__btn", {"active": isActive})} onClick={() => clickHandler()}>
            <span/>
            {label}
        </button>
    )
}

export default FilterButton
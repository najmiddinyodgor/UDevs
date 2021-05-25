import React, {FC} from "react"

type Props = {
    label: string,
    isActive: boolean,
    clickHandler: Function
}

const FilterButton: FC<Props> = ({label, clickHandler, isActive}: Props) => {
    return (
        <button className={["tools__btn", isActive ? "active" : ""].join(" ")} type={"button"} onClick={() => clickHandler()}>
            <span>{label}</span>
        </button>
    )
}

export default FilterButton
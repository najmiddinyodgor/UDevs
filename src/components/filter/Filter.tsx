import React, {FC, useState} from "react"

import swift from "./../../images/swift.svg";
import kotlin from "./../../images/kotlin.svg";
import flutter from "./../../images/flutter.svg";
import {ICard} from "../../type";
import FilterElem from "./FilterElem";
import FilterButton from "./FilterButton";

interface IFilterElem {
    id: number,
    label: string,
    activeClass: string,
    items: ICard[]
}

const filterElems: IFilterElem[] = [
    {
        id: 1,
        label: "Frontend",
        activeClass: "card--frontend",
        items: [
            {
                label: "Kotlin",
                icon: kotlin
            },
            {
                label: "Flutter",
                icon: flutter
            }
        ]
    },
    {
        id: 2,
        label: "Backend",
        activeClass: "card--backend",
        items: [
            {
                label: "Swift",
                icon: swift
            },
            {
                label: "Flutter",
                icon: flutter
            }
        ]
    },
    {
        id: 3,
        label: "DevOps",
        activeClass: "card--devops",
        items: [
            {
                label: "Kotlin",
                icon: kotlin
            },
            {
                label: "Flutter",
                icon: flutter
            }
        ]
    }
]

const Filter: FC = () => {
    const [activeElem, setActiveElem] = useState<number>(1)

    return (
        <div>
            <div>
                {
                    filterElems.map(({id, label}: IFilterElem) => {
                        return <FilterButton key={id} label={label}
                                             isActive={activeElem === id}
                                             clickHandler={() => setActiveElem(id)}/>
                    })
                }
            </div>
            <div className={"tools"}>
                {
                    filterElems.map(({label, activeClass, items, id}: IFilterElem) => {
                        return items.map((item: ICard) => <FilterElem
                            key={item.label} {...item}
                            cssClass={activeClass}
                            isActive={activeElem === id}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Filter
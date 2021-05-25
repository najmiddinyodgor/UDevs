import React, {FC, useContext, useState} from "react"

import swift from "./../../images/swift.svg";
import kotlin from "./../../images/kotlin.svg";
import flutter from "./../../images/flutter.svg";
import {ICard} from "../../type";
import FilterElem from "./FilterElem";
import FilterContextProvider, {FilterContext} from "../../contexts/FilterContext";
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
    const {active, onChange} = useContext(FilterContext)

    return (
        <FilterContextProvider>
            <div>
                <div>
                    <FilterContext.Consumer>
                        {
                            ({active}) => {
                                return filterElems.map((filterElem: IFilterElem) => {
                                    return <FilterButton key={filterElem.id} label={filterElem.label}
                                                         isActive={active === filterElem.id}
                                                         clickHandler={() => onChange.call(FilterContext, filterElem.id)}/>
                                })
                            }
                        }
                    </FilterContext.Consumer>
                </div>
                <div className={"tools"}>
                    <FilterContext.Consumer>
                        {
                            ({active}) => {
                                return filterElems.map((filterElem: IFilterElem) => {
                                    return filterElem.items.map((item: ICard) => <FilterElem {...item}
                                                                                             id={filterElem.id}/>)
                                })
                            }
                        }
                    </FilterContext.Consumer>
                </div>
            </div>
        </FilterContextProvider>
    )
}

export default Filter
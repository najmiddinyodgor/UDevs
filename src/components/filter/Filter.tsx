import React, {FC, useState} from "react"

import swift from "../../images/technologies/swift.svg";
import kotlin from "../../images/technologies/kotlin.svg";
import flutter from "../../images/technologies/flutter.svg";
import figma from "../../images/technologies/figma.svg";
import illustrator from "../../images/technologies/illustrator.svg";
import sketch from "../../images/technologies/sketch.svg";
import {filterButton, filterItem} from "../../type";
import FilterElem from "./FilterElem";
import FilterButton from "./FilterButton";

enum technologies {
    FRONTEND = 1,
    BACKEND = 2,
    DEVOPS = 3,
    DESIGN = 4
}

const classes = new Map();
classes.set(technologies.FRONTEND, "card--frontend");
classes.set(technologies.BACKEND, "card--backend")
classes.set(technologies.DEVOPS, "card--devops")
classes.set(technologies.DESIGN, "card--design")

const filterButtons: filterButton[] = [
    {
        id: technologies.FRONTEND,
        label: "Frontend",
    },
    {
        id: technologies.BACKEND,
        label: "Backend",
    },
    {
        id: technologies.DEVOPS,
        label: "DevOps",
    },
    {
        id: technologies.DESIGN,
        label: "Design"
    }
]

const filterItems: filterItem[] = [
    {
        id: technologies.FRONTEND,
        label: "Kotlin",
        icon: kotlin
    },
    {
        id: technologies.BACKEND,
        label: "Swift",
        icon: swift
    },
    {
        id: technologies.DESIGN,
        label: "Figma",
        icon: figma
    },
    {
        id: technologies.FRONTEND,
        label: "Flutter",
        icon: flutter
    },
    {
        id: technologies.DESIGN,
        label: "Sketch",
        icon: sketch
    },
    {
        id: technologies.DESIGN,
        label: "Illustrator",
        icon: illustrator
    },
]

const Filter: FC = () => {
    const [activeElem, setActiveElem] = useState<number>(0)

    function changeActiveElem(id: number) {
        if (id === activeElem) {
            setActiveElem(0)
        } else {
            setActiveElem(id)
        }
    }

    return (
        <div>
            <div>
                {
                    filterButtons.map(({id, label}: filterButton) => {
                        return <FilterButton key={id} label={label}
                                             isActive={activeElem === id}
                                             clickHandler={() => changeActiveElem(id)}/>
                    })
                }
            </div>
            <div className={"tools"}>
                {
                    filterItems.map(({label, icon, id}: filterItem) => (
                            <FilterElem
                                key={label}
                                icon={icon}
                                label={label}
                                cssClass={classes.get(id)}
                                isActive={activeElem === 0 || activeElem === id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Filter
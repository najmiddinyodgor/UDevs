import React, {FC} from "react"
import {ILink, ISection} from "../../../type";
import NavLink from "./NavLink";

type Props = {
    link: ILink
}

const Dropdown: FC<Props> = ({link}: Props) => {
    return (
        <div className={"dropdown"}>
            <NavLink link={link} icon/>
            <div className={"dropdown__wrap"}>
                <h3>{link.title}</h3>
                <ul className={"dropdown__list"}>
                    {
                        link.dropdown!.map(({link}: ISection) => (
                            <li className={"dropdown__item"}>
                                <a className={"dropdown__link"} href={"#" + link.path}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
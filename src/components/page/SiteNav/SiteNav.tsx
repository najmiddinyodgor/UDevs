import React, {FC, useContext} from "react";
// @ts-ignore
import Scrollspy from 'react-scrollspy'
import NavLink from "./NavLink";
import {ILink, ISection} from "../../../type";
import {NavContext} from "../../../contexts/NavContext";
import Button from "../../buttons/BlueButton";

const SiteNav: FC = () => {
    const {sections} = useContext(NavContext)

    const links = React.useMemo(() => {
        return sections.map((section: ISection) => section.link)
    }, [sections])

    return (
        <Scrollspy items={links.map((link: ILink) => link.path)} className={"site-nav"} currentClassName={"active"}>
            {
                links.map((link: ILink, id: number) => {
                    return (
                        <li className={"site-nav__item"} key={link.path}>
                            <NavLink link={link}/>
                        </li>
                    )
                })
            }
            <li>
                <Button cssClass={"btn--contact"} href={"#contact"}>
                    Связаться
                </Button>
            </li>
        </Scrollspy>
    )
}

export default SiteNav
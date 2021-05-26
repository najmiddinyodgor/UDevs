import {FC} from "react";
import {ILink} from "../../../type";

type Props = {
    link: ILink,
    icon?: boolean
}


const NavLink: FC<Props> = ({link, icon}: Props) => {
    return (
        <a className={"site-nav__link"} href={"#" + link.path}>
            {link.title}
            {
                icon && <img
                    src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="}
                    alt="Dropdown"/>
            }
        </a>
    )
}

export default NavLink
import {FC} from "react";
import {ILink} from "../../../type";

type Props = {
    link: ILink,
}


const NavLink: FC<Props> = ({link}: Props) => {
    return (
        <a className={"site-nav__link"} href={"#" + link.path}>
            {link.title}
        </a>
    )
}

export default NavLink
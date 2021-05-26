import React, {FC} from "react"
import Logo from "../../Logo";
import SiteNav from "../SiteNav/SiteNav";

const PageNav: FC = () => {
    return (
        <nav className={"page-nav"}>
            <Logo width={96} height={38}/>
            <SiteNav/>
        </nav>
    )
}

export default PageNav
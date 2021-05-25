import React, {FC} from "react";
import Container from "../../Container";

import PageNav from "../PageNav/PageNav";

const Header: FC = () => {
    return (
        <header className={"header"}>
            <Container>
                <PageNav/>
            </Container>
        </header>
    )
}

export default Header
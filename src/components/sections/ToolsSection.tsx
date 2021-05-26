import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";
import Filter from "../filter/Filter";

const ToolsSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--blue"} title={"Инструменты"} single>
            <Filter/>
        </SectionWrapper>
    )
}

export default ToolsSection
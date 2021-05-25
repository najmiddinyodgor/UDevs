import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";
import SectionImage from "./components/SectionImage";
import Filter from "../filter/Filter";

const TeamSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--blue"} title={"Инструменты"} single>
            <Filter/>
        </SectionWrapper>
    )
}

export default TeamSection
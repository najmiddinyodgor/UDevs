import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";
import SectionImage from "./components/SectionImage";
import {ICard} from "../../type";
import browser from "../../images/browser.svg";
import html from "../../images/html.svg";
import ruler from "../../images/ruler.svg";
import infinity from "../../images/infinity.svg";
import colb from "../../images/colb.svg";
import mirror from "../../images/mirror.svg";
import CardList from "../lists/CardList";
import MiniCard from "../card/MiniCard";

const cards: ICard[] = [
    {
        label: "Frontend",
        icon: browser
    },
    {
        label: "Backend",
        icon: html
    },
    {
        label: "Architecture",
        icon: ruler
    },
    {
        label: "Mobile Design",
        icon: infinity
    },
    {
        label: "UX/UI",
        icon: mirror
    },
    {
        label: "QA",
        icon: colb
    },
]

const ConsaltingSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--with-bg"} title={"IT Консалтинг"}>
            <div className={"section__col"}>
                <p className={"section__text section__item"}>
                    Мы можем повысить квалификацию ваших сотрудников тем самым увеличить эффективность вашей компании.
                </p>
                <CardList cards={cards} Component={MiniCard} left/>
            </div>
            <div className={"section__col"}>
                <SectionImage path={"consalt.svg"}/>
            </div>
        </SectionWrapper>
    )
}

export default ConsaltingSection
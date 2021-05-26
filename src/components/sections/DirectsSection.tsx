import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";
import {ICard} from "../../type";
import BigCard from "../card/BigCard";
import peoples from "./../../images/peoples.svg"
import phone from "./../../images/phone.svg"
import tree from "./../../images/tree.svg"
import ux from "./../../images/ux.svg"
import settings from "./../../images/settings.svg"
import tv from "./../../images/tv.svg"
import CardList from "../lists/CardList";

const cards: ICard[] = [
    {
        label: "Выделенная команда",
        icon: peoples
    },
    {
        label: "Разработка мобильных приложений",
        icon: phone
    },
    {
        label: "Разработка и внедрение ERP систем",
        icon: tree
    },
    {
        label: "UI / UX дизайн",
        icon: ux
    },
    {
        label: "Оптимизация инфраструктуры",
        icon: settings
    },
    {
        label: "IT консалтинг",
        icon: tv
    },

]

const DirectsSection: FC = () => {
    return (
        <SectionWrapper title={"Наши услуги"}>
            <CardList cards={cards} Component={BigCard}/>
        </SectionWrapper>
    )
}

export default DirectsSection
import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";

import {ICard} from "../../type";
import CardList from "../lists/CardList";
import MiniCard from "../card/MiniCard";
import SectionImage from "./components/SectionImage";

import android from "../../images/technologies/android.svg";
import apple from "../../images/technologies/apple.svg";
import cross from "./../../images/cross.svg";
import swift from "../../images/technologies/swift.svg";
import kotlin from "../../images/technologies/kotlin.svg";
import flutter from "../../images/technologies/flutter.svg";
import TransCard from "../card/TransCard";

const cards: ICard[] = [
    {
        label: "iOS",
        icon: apple
    },
    {
        label: "Android",
        icon: android
    },
    {
        label: "Crossplatform",
        icon: cross
    },

]

const techCards: ICard[] = [
    {
        label: "Swift",
        icon: swift
    },
    {
        label: "Kotlin",
        icon: kotlin
    },
    {
        label: "Flutter",
        icon: flutter
    }
];

const MobileSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--with-bg"} title={"Мобильная разработка"}>
            <div className={"section__col"}>
                <p className={"section__text section__item"}>
                    В сотрудничестве со стартапами мы научились создавать творческий и функциональный пользовательский
                    интерфейс для мобильных приложений.
                </p>
                <div className={"section__item"}>
                    <CardList cards={cards} Component={MiniCard} left/>
                </div>
                <div className={"section__item"}>
                    <h3 className={"section__subtitle"}>Технологии</h3>
                    <CardList cards={techCards} Component={TransCard} left/>
                </div>
            </div>
            <div className={"section__col"}>
                <SectionImage path={'mobile.png'} hasPattern/>
            </div>
        </SectionWrapper>
    )
}

export default MobileSection
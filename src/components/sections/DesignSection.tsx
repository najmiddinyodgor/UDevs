import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";

import {ICard} from "../../type";
import CardList from "../lists/CardList";
import MiniCard from "../card/MiniCard";
import SectionImage from "./components/SectionImage";

import ui from "../../images/ui.svg";
import uxtree from "../../images/uxtree.svg";
import atomic from "./../../images/atomic.svg";
import desktop from "./../../images/desktop.svg";
import mobile from "./../../images/mobile.svg";
import proto from "./../../images/proto.svg";
import figma from "../../images/technologies/figma.svg";
import sketch from "../../images/technologies/sketch.svg";
import illustrator from "../../images/technologies/illustrator.svg";
import lottie from "../../images/technologies/lottie.svg";
import TransCard from "../card/TransCard";

const cards: ICard[] = [
    {
        label: "UX",
        icon: uxtree
    },
    {
        label: "UI",
        icon: ui
    },
    {
        label: "Prototyping",
        icon: proto
    },
    {
        label: "Mobile Design",
        icon: mobile
    },
    {
        label: "Web Design",
        icon: desktop
    },
    {
        label: "AtomicDesign",
        icon: atomic
    },

]

const techCards: ICard[] = [
    {
        label: "Figma",
        icon: figma
    },
    {
        label: "Sketch",
        icon: sketch
    },
    {
        label: "Lottie",
        icon: lottie
    },
    {
        label: "Illustrator",
        icon: illustrator
    }
];

const DesignSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--with-bg"} title={"UI / UX Дизайн"}>
            <div className={"section__col"}>
                <p className={"section__text section__item"}>
                    Наша компания придерживается подхода к дизайну, ориентированного на человека..
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

export default DesignSection
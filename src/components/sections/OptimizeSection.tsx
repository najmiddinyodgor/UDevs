import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";

import {ICard} from "../../type";
import CardList from "../lists/CardList";
import MiniCard from "../card/MiniCard";
import SectionImage from "./components/SectionImage";

import ruler from "../../images/ruler.svg";
import testing from "../../images/testing.svg";
import stress from "../../images/stress.svg";
import chartCirle from "../../images/chart-cirle.svg";
import infinity from "../../images/infinity.svg";
import exchange from "../../images/exchange.svg";
import cloud from "../../images/cloud.svg";

const cards: ICard[] = [
    {
        label: "Architecture",
        icon: ruler
    },
    {
        label: "Auto testing",
        icon: testing
    },
    {
        label: "Stress testing",
        icon: stress
    },
    {
        label: "Load testing",
        icon: chartCirle
    },
    {
        label: "Devops",
        icon: infinity
    },
    {
        label: "Cloud",
        icon: cloud
    },
    {
        label: "CI / CD",
        icon: exchange
    },

]

const OptimizeSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--blue"} title={"Оптимизация инфраструктуры"}>
            <div className={"section__col"}>
                <SectionImage path={'erp.png'} hasPattern/>
            </div>
            <div className={"section__col"}>
                <p className={"section__text section__item"}>
                    Наши опытные специалисты помогут оптимизировать вашу инфраструктуру
                </p>
                <div className={"section__item"}>
                    <CardList cards={cards} Component={MiniCard} cssClass={"card-list--dark"} right/>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default OptimizeSection
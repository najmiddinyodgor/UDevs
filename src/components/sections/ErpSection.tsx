import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";

import {ICard} from "../../type";
import CardList from "../lists/CardList";
import MiniCard from "../card/MiniCard";
import SectionImage from "./components/SectionImage";

import crm from "../../images/crm.svg";
import elearning from "../../images/elearning.svg";
import ecommerce from "../../images/ecommerce.svg";
import pos from "../../images/pos.svg";
import mail from "../../images/mail.svg";
import warehouse from "../../images/warehouse.svg";
import TransCard from "../card/TransCard";

const cards: ICard[] = [
    {
        label: "CRM",
        icon: crm
    },
    {
        label: "eLearning",
        icon: elearning
    },
    {
        label: "E-Commerce",
        icon: ecommerce
    },
    {
        label: "POS",
        icon: pos
    },
    {
        label: "Sms/Email",
        icon: mail
    },
    {
        label: "Warehouse",
        icon: warehouse
    },

]

const ErpSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--blue"} title={"ERP cистемы"}>
            <div className={"section__col"}>
                <SectionImage path={'erp.png'} hasPattern/>
            </div>
            <div className={"section__col"}>
                <p className={"section__text section__item"}>
                    IT Системы любого уровня сложности в удобные для вас сроки.
                </p>
                <div className={"section__item"}>
                    <CardList cards={cards} Component={MiniCard} cssClass={"card-list--dark"} right/>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ErpSection
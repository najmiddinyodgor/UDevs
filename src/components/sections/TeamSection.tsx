import {FC} from "react";
import SectionWrapper from "./components/SectionWrapper";
import SectionImage from "./components/SectionImage";

const TeamSection: FC = () => {
    return (
        <SectionWrapper cssClass={"section--blue"} title={"Выделенная команда"}>
            <div className={"section__col"}>
                <p className={"section__text section__text--mini section__item"}>
                    Для каждого проекта мы формируем команду, в которую входят проект менеджер, бизнес-аналитик,
                    UI/UX дизайнер, DevOps, QA-инженер, бэкенд и фронтенд разработчики
                </p>
                <dl className={"stats"}>
                    <div>
                        <dt>40+</dt>
                        <dd>Сотрудников</dd>
                    </div>
                </dl>
            </div>
            <div className={"section__col"}>
                <SectionImage path={"team.svg"}/>
            </div>
        </SectionWrapper>
    )
}

export default TeamSection
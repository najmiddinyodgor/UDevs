import React, {FC} from "react"
import Container from "../Container";
import Logo from "../Logo";
import BlueButton from "../buttons/BlueButton";
import SectionImage from "./components/SectionImage";

const HeroSection: FC = () => {
    return (
        <section className={"section section--with-bg section--hero"}>
            <Container>
                <div className={"section__wrap"}>
                    <div className={"section__row"}>
                        <div className={"section__col"}>
                            <Logo width={267} height={89}/>
                            <h1>IT-Аутсорсинг Компания</h1>
                            <BlueButton cssClass={"btn--contact large"} href={"#contacts"}>
                                Связаться
                            </BlueButton>
                        </div>
                        <div className={"section__col"}>
                            <SectionImage path={"hero.svg"}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection
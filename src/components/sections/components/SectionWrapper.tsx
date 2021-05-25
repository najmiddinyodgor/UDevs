import {FC, PropsWithChildren} from "react";
import Container from "../../Container";

type Props = PropsWithChildren<{
    cssClass?: string,
    title: string,
    single?: boolean
}>

const SectionWrapper: FC<Props> = ({title, cssClass, single, children}: Props) => {
    const classes = [];
    if (!single) classes.push("section__row")
    return (
        <section className={cssClass ?? ""}>
            <Container>
                <div className={"section__wrap"}>
                    <h2 className={"section__title"}>{title}</h2>
                    <div className={classes.join(" ")}>
                        {children}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SectionWrapper
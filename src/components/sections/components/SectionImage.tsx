import React, {FC} from "react"

const basePath = "/static/img/sections/";
type Props = {
    path: string,
    hasPattern?: boolean
}

const SectionImage: FC<Props> = ({path, hasPattern}: Props) => {
    if (hasPattern) {
        return (
            <div className={"section__image section__image--bg"}>
                <div>
                    <img src={basePath + "pattern.png"}/>
                </div>
                <img src={basePath + path}/>
            </div>
        )
    }
    return (
        <div className={"section__image"}>
            <img src={basePath + path}/>
        </div>
    )
}

export default SectionImage
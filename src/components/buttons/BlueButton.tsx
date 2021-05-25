import React, {FC, PropsWithChildren} from "react"

type Props = PropsWithChildren<{
    type?: "button" | "submit" | "reset",
    href?: string,
    cssClass?: string
}>

const BlueButton: FC<Props> = ({type, href, cssClass, children}: Props) => {
    const classes = ["btn", cssClass ?? ""].join(" ");

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        )
    }
    return (
        <button type={type ?? "button"} className={classes}>
            {children}
        </button>
    )
}

export default BlueButton
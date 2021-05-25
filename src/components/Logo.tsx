import React, {FC} from "react";
import logo from "../images/logo.svg"

type Props = {
    width: number,
    height: number
}

const Logo: FC<Props> = ({width, height}: Props) => {
    return (
        <img src={logo}
             width={width}
             height={height}
             alt="UDevs"/>
    )
}

export default Logo
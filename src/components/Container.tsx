import {FC, PropsWithChildren} from "react";

const Container: FC<PropsWithChildren<any>> = ({children}: PropsWithChildren<any>) => {
    return (
        <div className={"container"}>
            {children}
        </div>
    )
}

export default Container
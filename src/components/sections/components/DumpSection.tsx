import {FC, PropsWithChildren} from "react";

const DumpComponent: FC<PropsWithChildren<any>> = ({children}: PropsWithChildren<any>) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DumpComponent
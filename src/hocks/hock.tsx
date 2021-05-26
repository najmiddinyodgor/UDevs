import {FC, ReactElement, ReactNode} from "react";

export function createSection(Component: FC, id: string, children?: ReactNode): ReactElement {
    if(children) {
        return (
            <div id={id}>
                {children}
            </div>
        )
    }
    return (
        <div id={id}>
            <Component/>
        </div>
    )
}
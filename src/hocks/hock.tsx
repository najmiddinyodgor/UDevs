import {FC, ReactElement} from "react";

export function createSection(Component: FC, id: string): ReactElement {
    return (
        <div id={id}>
            <Component/>
        </div>
    )
}
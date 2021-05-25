import {createContext, FC, PropsWithChildren} from "react";
import {ISection} from "../type";
import {createSection} from "../hocks/hock";
import ServiceSection from "../components/sections/ServiceSection";
import TeamSection from "../components/sections/TeamSection";
import MobileSection from "../components/sections/MobileSection";
import ToolsSection from "../components/sections/ToolsSection";

const sections: ISection[] = [
    {
        link: {
            title: "Направления",
            path: "services",
        },
        component: createSection(ServiceSection, "services")
    },
    {
        link: {
            title: "Команда",
            path: "team"
        },
        component: createSection(TeamSection, "team")
    },
    {
        link: {
            title: "Услуги",
            path: "moobile"
        },
        component: createSection(MobileSection, "mobile")
    },
    {
        link: {
            title: "Инструменты",
            path: "tools"
        },
        component: createSection(ToolsSection, "tools")
    }
];

export const NavContext = createContext<{ sections: ISection[] }>({sections})

const NavContextProvider: FC<PropsWithChildren<any>> = ({children}: PropsWithChildren<any>) => {
    return (
        <NavContext.Provider value={{sections}}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider
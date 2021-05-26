import {createContext, FC, PropsWithChildren} from "react";
import {ISection} from "../type";
import {createSection} from "../hocks/hock";
import DirectsSection from "../components/sections/DirectsSection";
import TeamSection from "../components/sections/TeamSection";
import MobileSection from "../components/sections/MobileSection";
import ToolsSection from "../components/sections/ToolsSection";
import ErpSection from "../components/sections/ErpSection";
import DesignSection from "../components/sections/DesignSection";
import OptimizeSection from "../components/sections/OptimizeSection";
import ConsaltingSection from "../components/sections/ConsaltingSection";

const sections: ISection[] = [
    {
        link: {
            title: "Направления",
            path: "directs",
        },
        component: createSection(DirectsSection, "directs")
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
            path: "services",
            dropdown: [
                {
                    link: {
                        title: "Разработка мобильных приложений",
                        path: "mobile-services"
                    },
                    component: createSection(MobileSection, "mobile-services")
                },
                {
                    link: {
                        title: "Разработка и внедрение ERP систем",
                        path: "erp-services"
                    },
                    component: createSection(ErpSection, "erp-services")
                },
                {
                    link: {
                        title: "UX/ UI design",
                        path: "design-services"
                    },
                    component: createSection(DesignSection, "design-services")
                },
                {
                    link: {
                        title: "Оптимизация инфраструктуры",
                        path: "optimize-services"
                    },
                    component: createSection(OptimizeSection, "optimize-services")
                },
                {
                    link: {
                        title: "IT Консалтинг",
                        path: "consalting-services"
                    },
                    component: createSection(ConsaltingSection, "consalting-services")
                }
            ]
        },
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
import React, {useContext} from 'react';

import {ISection} from "./type";

import Header from "./components/page/Header/Header";
import {NavContext} from "./contexts/NavContext";
import HeroSection from "./components/sections/HeroSection";
import DumpSection from "./components/sections/components/DumpSection";
import {createSection} from "./hocks/hock";

function App() {
    const {sections} = useContext(NavContext)

    return (
        <>
            <Header/>
            <main>
                <HeroSection/>
                {
                    sections.map((section: ISection) => {
                        if (section.link.dropdown) {
                            return createSection(DumpSection, section.link.path, section.link.dropdown.map((section: ISection) => section.component))
                        }
                        return section.component
                    })
                }
            </main>
        </>
    );
}

export default App;

import React, {useContext} from 'react';

import {ISection} from "./type";

import Header from "./components/page/Header/Header";
import {NavContext} from "./contexts/NavContext";
import HeroSection from "./components/sections/HeroSection";

function App() {
    const {sections} = useContext(NavContext)

    return (
        <>
            <Header/>
            <main>
                <HeroSection/>
                {
                    sections.map((section: ISection) => section.component)
                }
            </main>
        </>
    );
}

export default App;

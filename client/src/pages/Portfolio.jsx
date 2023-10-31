import Projects from "../components/Project";
import { useState } from 'react';
import BackToTop from "../components/BackToTop";

export default function Portfolio() {

    const [hovered, setHovered] = useState(null);

    const increaseSize = (status, id) => {
        if (status) {
            setHovered(id);
        } else {
            setHovered(null);
        };
    };

    const takeToApp = (application) => {
        window.open(application);
    };

    return (
        <>
            <section id="portfolio-section" style={{ width: '80%'}}>
                <div id="main-port-hold">
                    <div id="port-text-holder" style={{height: '15%'}}>
                        <h2>Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d</p>
                    </div>
                    <br />
                    <div id="port-projects-holder" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', height: '85%', padding: 10, width: '85%', margin: 'auto'}}>
                        <Projects increaseSize={increaseSize} hovered={hovered} takeToApp={takeToApp} />
                    </div>
                    <BackToTop />
                </div>
            </section>
        </>
    );
};
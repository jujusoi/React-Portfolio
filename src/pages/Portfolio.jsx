import Projects from "../components/Project";
import { useState } from 'react';

export default function Portfolio() {

    const [hovered, setHovered] = useState(null);

    const increaseSize = (status, id) => {
        if (status) {
            setHovered(id);
        } else {
            setHovered(null);
        }
    }

    return (
        <>
            <section id="portfolio-section" style={{ width: '80%'}}>
                <div id="main-port-hold">
                    <div id="port-text-holder" style={{height: '15%'}}>
                        <h2>Portfolio</h2>
                        <p>Here are some of my projects!</p>
                    </div>
                    <div id="port-projects-holder" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', height: '85%', padding: 10}}>
                        <Projects increaseSize={increaseSize} hovered={hovered} />
                    </div>
                </div>
            </section>
        </>
    );
};
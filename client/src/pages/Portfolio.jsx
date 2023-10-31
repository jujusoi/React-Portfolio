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
                        <p>Welcome to the portfolio section of my website. Here I've gathered a selection of my projects to give you a glimpse into my work. These projects were developed using a range of programming languages and technologies, such as Node.js, JavaScript, jQuery, Express, Handlebars and more.</p>
                        <p>Some utilize database management with MySQL and NoSQL databases like MongoDB. Feel free to explore these examples, and visit their repositories to view the versatility of my code.</p>
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
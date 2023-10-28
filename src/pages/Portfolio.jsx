import Projects from "../components/Project";

export default function Portfolio() {
    return (
        <>
            <section id="portfolio-section" style={{ width: '80%'}}>
                <div id="main-port-hold">
                    <div id="port-text-holder">
                        <h2>Portfolio</h2>
                        <p>Here are some of my projects!</p>
                    </div>
                    <div id="port-projects-holder" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                        <Projects />
                    </div>
                </div>
            </section>
        </>
    );
};
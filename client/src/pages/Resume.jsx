
import ResumeDownload from "../components/ResumeDownload";
import BackToTop from "../components/BackToTop";

export default function ResumePage() {
    return (
        <>
            <section id="resume-sect" style={{width: '80%'}}>
                <div id="prof-down" style={{display: "flex", justifyContent: 'space-evenly'}}>
                <BackToTop />
                <div id="resume-hold" style={{width: '30%'}}>
                    <ResumeDownload />
                </div>
                <div id="prof-hold"  style={{width: '60%'}}>
                    <h3 id="codingprof-head">Coding Proficiencies</h3>
                    <div id="prof-wrap" style={{display: 'flex'}}>
                    <div id="front-pro" style={{marginRight: 20}}>
                        <h4>Front end</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                        </ul>
                    </div>
                    <div id="back-pro">
                        <h4>Back end</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySql</li>
                            <li>Sequelize</li>
                            <li>NoSql</li>
                            <li>MongoDb</li>
                            <li>Mongoose</li>
                        </ul>
                    </div>
                    </div>
                    <div>
                        <p>Unrelated to web development, I am also experienced with the high-level programming language 'Lua' for miscellaneous purposes.</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
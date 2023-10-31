
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
                        </ul>
                    </div>
                    <div id="back-pro">
                        <h4>Back end</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MySql</li>
                        </ul>
                    </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d</p>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
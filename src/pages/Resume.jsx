
import ResumeDownload from "../components/ResumeDownload"

export default function ResumePage() {
    return (
        <>
            <section id="resume-sect">
                <div id="prof-down">
                <div id="resume-hold">
                    <ResumeDownload />
                </div>
                <div id="prof-hold">
                    <h3>Coding Proficiencies</h3>
                    <div id="front-pro">
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
                </div>
            </section>
        </>
    )
}
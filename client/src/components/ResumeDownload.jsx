import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResumeDownload() {

    const [size, setSize] = useState(180);

    const mouseEnter = (yn) => {
        yn ? setSize(185) : setSize(180);
    };

    return (
        <>
            <h2>Download my resume</h2>
            <p>Click on the image below</p>
            <Link to="/files/JMCurriculumVitae.docx" target="_blank" download>
                <img width={size} height={250} src="/icons/resume.PNG" alt="Resume" onMouseEnter={() => mouseEnter(true)} onMouseLeave={() => mouseEnter(false)} style={{borderRadius: 10}}/>
            </Link>
        </>
    )
}
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResumeDownload() {

    const [size, setSize] = useState(300);

    const clickImg = () => {
        console.log('hello');
    };

    const mouseEnter = (yn) => {
        yn ? setSize(310) : setSize(300);
    };

    return (
        <>
            <h2>Download my resume</h2>
            <p>Click on the image below</p>
            <Link to="/files/hello.txt" target="_blank" download>
                <img width={size} src="https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg" alt="Resume" onMouseEnter={() => mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}/>
            </Link>
        </>
    )
}
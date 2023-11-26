import BackToTop from "../components/BackToTop"

export default function AboutMe() {
    return (
        <>
    <section id="aboutme-sect" style={{width: '80%'}}>
        <div id="name-intro" style={{display: "flex", flexDirection: 'column'}}>
            <div id="nm-img" style={{display: 'flex'}}>
                <img style={{width: 175, height: 175, borderRadius: 100}} src="icons/pfp.jpg" alt="pfp" />
                <div id="basicinf-wrap" style={{marginLeft: 30}}>
                    <h1 id="name" style={{marginTop: 'auto', marginBottom: 'auto'}}>James McDonald</h1>
                    <h2 id="intro">Full Stack Web Developer</h2>
                </div>
            </div>
            <div id="nm-inf" style={{marginTop: 10}}>
                <p id="desc">Hello, I'm James, and I'm a Junior Full-stack Web Developer based in Adelaide, South Australia. With a background in coding, I'm dedicated to developing web applications to help ideas come to life. My approach is rooted in the idea that we never stop learning, and I'm always excited to explore new challenges and opportunities in the field, especially towards Back-end data and API related manners.</p>
            </div>
        </div>
        <br />
        <div id="expss-wrap" style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div id="exp-skills" style={{width: '43%'}}>
            <h3>Experience & Skills</h3>
            <div id="exp-paras">
                <p>I've had the privilege of diving into the world of coding over the course of a year and a half. I've navigated a multitude of programming languages, tools, and technologies. From HTML, CSS and JavaScript all the way to Node, Express, MongoDB and MySql, my coding path has been an exciting and continuous learning adventure. It's been a rewarding experience, allowing me to develop my problem-solving skills, collaborate with talented individuals, and contribute to diverse projects.</p>
            </div>
        </div>
        <br />
        <div id="pass-int" style={{width: '43%'}}>
            <h3>Passions & Interests</h3>
            <div id="pass-paras">
                <p>In regards to programming, my true interests lie in the back-end of web applications. One of my main motivators is simply getting really good at server and database management using tools like Express, MySql and NoSql to effectively create efficient algorithms for manipuating data on the web. Outside of web development I enjoy spending time drawing, 3D modeling, listening to music, and Lua coding.</p>
            </div>
        </div>
        </div>
        <BackToTop />
    </section>
        </>
    )
}
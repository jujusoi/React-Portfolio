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
                <p id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d</p>
            </div>
        </div>
        <br />
        <div id="expss-wrap" style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div id="exp-skills" style={{width: '43%'}}>
            <h3>Experience & Skills</h3>
            <div id="exp-paras">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d</p>
            </div>
        </div>
        <br />
        <div id="pass-int" style={{width: '43%'}}>
            <h3>Passions & Interests</h3>
            <div id="pass-paras">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d</p>
            </div>
        </div>
        </div>
        <BackToTop />
    </section>
        </>
    )
}


export default function AboutMe() {

    const smoothScroll = () => {
        const target = document.querySelector('#nav-list');
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <>
    <section id="aboutme-sect">
        <div id="name-intro">
            <div id="nm-img">
                <img width='200px' src="https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1829611852af3ffc6460b4068e20bcbc" alt="pfp" />
            </div>
            <div id="nm-inf">
                <h1 id="name">James McDonald</h1>
                <h2 id="intro">Full Stack Web Developer</h2>
                <br />
                <p id="desc">Blablabla</p>
            </div>
        </div>
        <br />
        <div id="exp-skills">
            <h3>Experience & Skills</h3>
            <div id="exp-paras">
                <p>Blablabla</p>
            </div>
        </div>
        <br />
        <div id="pass-int">
            <h3>Passions & Interests</h3>
            <div id="pass-paras">
                <p>More information</p>
            </div>
        </div>
        <br />
        <div id="cta">
            <a onClick={smoothScroll}>Explore my website further</a>
        </div>
    </section>
        </>
    )
}
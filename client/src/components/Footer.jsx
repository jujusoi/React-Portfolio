
import Platform from './Platform';
import { useState } from 'react';

export default function Footer() {

    const [hovered, setHovered] = useState(null);

    const increaseSize = (status, id) => {
        if (status) {
            setHovered(id);
        } else {
            setHovered(null);
        }
    }

    return (
        <>
        <section style={{ width: '100%'}}>
            <div style={{ height: 140, marginTop: 60}}>
                <img style={{width: '100%', height: '100%'}} src="/icons/coverimg2.jpg" alt="" />
            </div>
        </section>
        <section id="footer-sect" style={{width: '80%', borderTop: '2px solid rgb(69, 69, 69)'}}>
            <div id="footer-div" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120}}>
                <div id='footer-plfs'>
                    <Platform platformLink={'https://github.com/jujusoi'} hoverBool={'gh'} platformIcon={'/icons/githubicon.png'} platformAlt={'GitHub'} increaseSize={increaseSize} hovered={hovered} bigSize={47} smallSize={50} />

                    <Platform platformLink={'https://www.linkedin.com/in/james-mcdonald-20b20b299/'} hoverBool={'li'} platformIcon={'/icons/linkedinicn.png'} platformAlt={'LinkedIn'} increaseSize={increaseSize} hovered={hovered} bigSize={47} smallSize={50} />

                    <Platform platformLink={'https://stackoverflow.com/users/22805059/jujusoi'} hoverBool={'so'} platformIcon={'/icons/stackicon.png'} platformAlt={'Stack Overflow'} increaseSize={increaseSize} hovered={hovered} bigSize={47} smallSize={50} />
                </div>
            </div>
        </section>
        </>
    )
}
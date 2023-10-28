import { useState } from 'react';
import Platform from '../components/Platform.jsx';

export default function Contacts() {
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
            <section id='contacts-sect' style={{width: "80%", display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div id='form-hold' style={{width: '65%', padding: '10px 5px', display: 'flex', flexDirection: 'column'}}>
                    <div id='form-desc-hold' style={{ display: 'flex', flexDirection: 'column', height: '30%'}}>
                        <h3 style={{marginBottom: 5}}>Got any questions?</h3>
                        <p style={{margin: 0}}><i>Send me a message!</i></p>
                    </div>
                    <form id='input-form' style={{height: '70%', width: '80%'}}>
                        <div id='input-nne-hold' style={{ height: '25%', display: 'flex', justifyContent: 'space-between'}}>
                            <div id='name-hold' style={{display: 'flex', flexDirection: 'column', width: '35%'}}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" style={{height: '40%', border: '1px solid rgba(118, 118, 118, .75)'}} />
                            </div>
                            <div id='email-hold' style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" style={{height: '40%', border: '1px solid rgba(118, 118, 118, .75)'}} />
                            </div>
                        </div>
                        <div id='input-message-hold' style={{display: 'flex', flexDirection: 'column', height: '75%'}}>
                            <label htmlFor="message" style={{height: '25%'}}>Message</label>
                            <textarea id="message" name="message" placeholder='Enter your message here' style={{height: '75%', padding: 12, resize: 'none', border: '1px solid rgba(118, 118, 118, .75)'}}></textarea>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div id='info-hold' style={{width: '35%', padding: '10px 5px'}}>
                    <div id='contact-info'>
                        <h3>Contact Info</h3>
                        <p><b>Email:</b> <span>jalxmcdonald@hotmail.com</span></p>
                        <p><b>Name:</b> <span>James McDonald</span></p>
                        <p><b>Phone:</b> <span>0475 091 895</span></p>
                    </div>
                    <br />
                    <div id='platforms'>
                        <h3>Other Platforms</h3>
                        <div id='platform-holder'>
                        <Platform platformLink={'https://github.com/jujusoi'} hoverBool={'gh'} platformIcon={'/icons/githubicon.png'} platformAlt={'GitHub'} increaseSize={increaseSize} hovered={hovered} />

                        <Platform platformLink={'https://www.google.com'} hoverBool={'li'} platformIcon={'/icons/linkedinicn.png'} platformAlt={'LinkedIn'} increaseSize={increaseSize} hovered={hovered} />
                        
                        <Platform platformLink={'https://stackoverflow.com/users/22805059/jujusoi'} hoverBool={'so'} platformIcon={'/icons/stackicon.png'} platformAlt={'Stack Overflow'} increaseSize={increaseSize} hovered={hovered} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
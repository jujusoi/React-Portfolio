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
            <section>
                <div>
                    <h3>Got any questions?</h3>
                    <p><i>Send me a message!</i></p>
                    <form>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div>
                    <div>
                        <h3>Contact Info</h3>
                        <p><b>Name:</b> <span>James McDonald</span></p>
                        <p><b>Email:</b> <span>jalxmcdonald@hotmail.com</span></p>
                        <p><b>Phone:</b> <span>0475 091 895</span></p>
                    </div>
                    <br />
                    <div>
                        <h3>Other Platforms</h3>
                        <Platform platformLink={'https://github.com/jujusoi'} hoverBool={'gh'} platformIcon={'/icons/githubicon.png'} platformAlt={'GitHub'} increaseSize={increaseSize} hovered={hovered} />

                        <Platform platformLink={'https://www.google.com'} hoverBool={'li'} platformIcon={'/icons/linkedinicn.png'} platformAlt={'LinkedIn'} increaseSize={increaseSize} hovered={hovered} />
                        
                        <Platform platformLink={'https://stackoverflow.com/users/22805059/jujusoi'} hoverBool={'so'} platformIcon={'/icons/stackicon.png'} platformAlt={'Stack Overflow'} increaseSize={increaseSize} hovered={hovered} />
                    </div>
                </div>
            </section>
        </>
    );
};
import { useState } from 'react';

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
                        <img onMouseEnter={() => increaseSize(true, 'gh')} onMouseLeave={() => increaseSize(false)} width={hovered === 'gh' ? 55 : 50} src="/icons/githubicon.png" alt="GitHub" />
                        <img onMouseEnter={() => increaseSize(true, 'li')} onMouseLeave={() => increaseSize(false)} width={hovered === 'li' ? 55 : 50} src="/icons/linkedinicn.png" alt="LinkedIn" />
                        <img onMouseEnter={() => increaseSize(true, 'so')} onMouseLeave={() => increaseSize(false)} width={hovered === 'so' ? 55 : 50} src="/icons/stackicon.png" alt="StackOverflow" />
                    </div>
                </div>
            </section>
        </>
    )
};
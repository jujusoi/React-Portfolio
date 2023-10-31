import { useState } from 'react';
import Platform from '../components/Platform.jsx';
import { useMutation } from '@apollo/client';

import { ADD_MESSAGE } from '../utils/mutation.js';

export default function Contacts() {
    const [hovered, setHovered] = useState(null);
    const [formState, setFormState] = useState({
        messageText: '',
        messagerEmail: '',
        messagerName: '',
    });

    const [addMessage, { error }] = useMutation(ADD_MESSAGE)

    const increaseSize = (status, id) => {
        if (status) {
            setHovered(id);
        } else {
            setHovered(null);
        }
    }

    const setForm = (event) => {
        const { name , value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const formSubmit = async (event) => {
        event.preventDefault()
        try {
            const { data } = await addMessage({
                variables: { ...formState },
            });
            setFormState({
                messageText: '',
                messagerEmail: '',
                messagerName: '',
            });
        } catch (error) {
            console.log(error);
        };
    };

    return (
        <>
            <section id='contacts-sect' style={{width: "80%", display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div id='form-hold' style={{width: '65%', padding: '10px 5px', display: 'flex', flexDirection: 'column'}}>
                    <div id='form-desc-hold' style={{ display: 'flex', flexDirection: 'column', height: '30%'}}>
                        <h3 style={{marginBottom: 5}}>Got any questions?</h3>
                        <p style={{margin: 0}}><i>Send me a message!</i></p>
                    </div>
                    <form id='input-form' onSubmit={formSubmit} style={{height: '70%', width: '80%'}}>
                        <div id='input-nne-hold' style={{ height: '25%', display: 'flex', justifyContent: 'space-between'}}>
                            <div id='name-hold' style={{display: 'flex', flexDirection: 'column', width: '35%'}}>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="messagerName" style={{height: '40%', border: '1px solid rgba(118, 118, 118, .75)', paddingLeft: 12}} placeholder='Name' value={formState.messagerName} onChange={setForm} />
                            </div>
                            <div id='email-hold' style={{display: 'flex', flexDirection: 'column', width: '60%'}}>
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="messagerEmail" style={{height: '40%', border: '1px solid rgba(118, 118, 118, .75)',  paddingLeft: 12}} placeholder='Email' value={formState.messagerEmail} onChange={setForm} />
                            </div>
                        </div>
                        <div id='input-message-hold' style={{display: 'flex', flexDirection: 'column', height: '75%'}}>
                            <label htmlFor="message" style={{height: '25%'}}>Message</label>
                            <textarea id="message" name="messageText" placeholder='Enter your message here' style={{height: '75%', padding: 12, resize: 'none', border: '1px solid rgba(118, 118, 118, .75)'}} value={formState.messageText} onChange={setForm} ></textarea>
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
                        <div id='platform-holder' style={{height: 70}}>
                        <Platform platformLink={'https://github.com/jujusoi'} hoverBool={'gh'} platformIcon={'/icons/githubicon.png'} platformAlt={'GitHub'} increaseSize={increaseSize} hovered={hovered} bigSize={55} smallSize={50} />

                        <Platform platformLink={'https://www.google.com'} hoverBool={'li'} platformIcon={'/icons/linkedinicn.png'} platformAlt={'LinkedIn'} increaseSize={increaseSize} hovered={hovered} bigSize={55} smallSize={50} />
                        
                        <Platform platformLink={'https://stackoverflow.com/users/22805059/jujusoi'} hoverBool={'so'} platformIcon={'/icons/stackicon.png'} platformAlt={'Stack Overflow'} increaseSize={increaseSize} hovered={hovered} bigSize={55} smallSize={50} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
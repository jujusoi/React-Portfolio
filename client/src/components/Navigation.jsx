import { Link, useLocation } from 'react-router-dom';
import navItems from './data/navigation.json';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [url, setUrl] = useState(window.location.pathname.split('/')[1]);
    if (url === '') {
        setUrl('About');
    };
    return ( 
        <>
        <div id='header-wrap' style={{borderBottom: '#454545 2px solid', height: 85, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center'}}>
        <div id='nav-list' style={{width: '65%'}}>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
        {navItems.map(obj => (
                <li key={obj.id}>
                    <Link onClick={() => setUrl(obj.name)} style={url === obj.name ? {color: '#ffffff', borderBottom: '2px solid #ffffff', borderRadius: 2, paddingBottom: 5} : null }
                        to={obj.path}>
                        {obj.name}
                    </Link>
                </li>
        ))}
            </ul>
        </div>
        <div id='nav-icon' style={{ width: '35%', display: 'block'}}>
            <img style={{width: 40, borderRadius: 100}} src="/icons/pfp.jpg" alt="header icon" />
        </div>
        </div>
        
        </>
    )
}
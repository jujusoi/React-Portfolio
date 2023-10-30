import { Link, useLocation } from 'react-router-dom';
import navItems from './data/navigation.json';

export default function Navigation() {
    return ( 
        <>
        <div id='header-wrap' style={{height: 85, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center'}}>
        <div id='nav-list' style={{width: '65%'}}>
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 0 }}>
        {navItems.map(obj => (
                <li key={obj.id}>
                    <Link
                        to={obj.path}>
                        {obj.name}
                    </Link>
                </li>
        ))}
            </ul>
        </div>
        <div id='nav-icon' style={{ width: '35%', display: 'block'}}>
            <img style={{width: 40}} src="/icons/githubicon.png" alt="header icon" />
        </div>
        </div>
        
        </>
    )
}
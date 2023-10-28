import { Link, useLocation } from 'react-router-dom';
import navItems from './data/navigation.json';

export default function Navigation() {
    return ( 
        <>
        <div id='nav-list'>
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
        </>
    )
}
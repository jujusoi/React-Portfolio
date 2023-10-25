import { Link, useLocation } from 'react-router-dom';
import navItems from './data/navigation.json';

export default function Navigation() {
    return ( 
        <>
        <div id='nav-list'>
        {navItems.map(obj => (
            <ul key={obj.id}>
                <li>
                    <Link
                        to={obj.path}>
                        {obj.name}
                    </Link>
                </li>
            </ul>
        ))}
        </div>
        </>
    )
}
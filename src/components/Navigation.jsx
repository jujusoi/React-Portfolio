
import navItems from './data/navigation.json';

export default function Navigation() {
    return ( 
        <>
        <div id='nav-list'>
        {navItems.map(obj => (
            <div key={obj.id}>
                <a href={obj.path}>{obj.name}</a>
            </div>
        ))}
        </div>
        </>
    )
}
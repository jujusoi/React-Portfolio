
const things = [
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Portfolio',
        path: '/portfolio'
    },
    {
        name: 'Contacts',
        path: '/contacts'
    }
]

export default function Navigation() {
    return ( 
        <>
        {things.map(obj => (
            <a href={obj.path}>{obj.name}</a>
        ))}
        </>
    )
}
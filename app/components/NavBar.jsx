import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    testdata: 'Why Cypress?'
    },
    {
    label: 'Overview',
    path: '/overview',
    testdata: 'Overview'

    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    testdata: 'Fundamentals'

    },
    {
        label: 'Forms',
        path: '/forms',
        testdata: 'Forms'
    },
    {
        label: 'Examples',
        path: '/examples' ,
        testdata: 'Examples'
    },
    {
        label: 'Component',
        path: '/component' ,
        testdata: 'Component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        testdata: 'Best Practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem testdata= {item.testdata} key={item.label} label={item.label} path={item.path} />
                ))
            }
        </ul>
    )
}
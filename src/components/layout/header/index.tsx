import React, { useEffect } from 'react'
import { Link } from 'gatsby'

type NavItem = {
  title: string,
  to: string
}

const navItems: NavItem[] = [
  {
    title: 'home',
    to: '/'
  },
   {
     title: 'about',
     to: 'about'
   }
]

const Header: React.FC = () => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('light')

  useEffect(() => {
    const html = document.querySelector('html')
    if (theme === 'dark') {
      html.setAttribute('data-theme-dark', 'true')
    } else {
      html.removeAttribute('data-theme-dark');
    }

  }, [theme])

  return <nav>
    <button onClick={() => {
      setTheme((t) => t === 'light' ? 'dark' : 'light')
    }}>{theme}</button>
    <ul>
      {navItems.map(i => <li key={i.title}><Link title={i.title} to={i.to}>{i.title}</Link></li>)}
    </ul>
  </nav>
}

export default Header;
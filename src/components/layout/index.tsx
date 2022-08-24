import * as React from 'react'
import Footer from './footer'
import Header from './header'
import * as styles from './layout.module.scss'

export type LayoutProps = {
  title?: string,
  children: React.ReactChild | React.ReactChild[]
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <>
    <title>{props.title || 'timaramazanov'}</title>    
    <header>
      <Header/>
    </header>
    <main className={styles.root}>
      {props.children}
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
}

export default Layout

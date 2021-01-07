import React, {  useState } from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { useLocation } from "@reach/router"

const navList = [
  {
    slug: "/",
    name: "Home",
    cssClass: "nav-home",
  },
  {
    slug: "/elements",
    name: "Elements",
    cssClass: "nav-elements",
  },
  {
    slug: "/about",
    name: "About",
    cssClass: "nav-about",
  },
]

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = useState(false)
  const current = useLocation().pathname;

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href='#top'
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul>
              <div
                className="nav" role="menu"
              >
                {
                  navList.map((item) =>
                    <div key={item.name} className={clsx(item.cssClass, current === item.slug && "nav-current")}>
                      <Link to={item.slug}>{item.name}</Link>
                    </div>)
                }
              </div>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        {" & "}
        <a
          href="https://flotiq.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flotiq
        </a>
      </footer>
    </div>
  )
}

export default Layout

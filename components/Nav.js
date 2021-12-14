import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  if (typeof window !== 'undefined') {
    console.log(window.location.href);
    if (window.location.href === '/') {
      console.log('main');
    } else if (window.location.href === '/admin') {
      console.log('This is admin');
    } else if (
      window.location.href === '/tavlor' ||
      window.location.href === '/skulpturer'
    ) {
      console.log('galleri');
    }
  }

  return (
    <nav className={navStyles.nav}>
      <ul>
        <div className={navStyles.left}>
          <li>
            <a href='/'>Charlotte Hillborg</a>
          </li>
        </div>
        <div className={navStyles.right}>
          <li>
            <a href='/tavlor'>Tavlor</a>
          </li>
          <li>
            <a href='/skulpturer'>Skulpturer</a>
          </li>
          <li>
            <a
              onClick={() =>
                document
                  .getElementById('about')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                document
                  .getElementById('Contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;

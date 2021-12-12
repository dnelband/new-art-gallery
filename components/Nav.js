import navStyles from '../styles/Nav.module.css';

const Nav = () => {
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
